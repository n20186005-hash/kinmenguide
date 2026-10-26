import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { load } from 'cheerio';
const root = path.resolve('dist');
const walk = dir => fs.readdirSync(dir, {withFileTypes:true}).flatMap(d=>d.isDirectory()?walk(path.join(dir,d.name)):[path.join(dir,d.name)]);
const files=walk(root).filter(f=>f.endsWith('.html'));
assert.ok(files.length>=70,`Expected at least 70 pages, got ${files.length}`);
const titles=new Set(),descriptions=new Set();
const errors=[];
const noindexRoutes=new Set(['/404.html','/plan/','/trip/','/search/']);
const fileFor = pathname => path.join(root,pathname.endsWith('/')?pathname+'index.html':pathname);
const routes=files.map(f=>'/'+path.relative(root,f).replace(/index\.html$/,'').replace(/\\/g,'/'));
let links=0,images=0,schemas=0;
for(const file of files){
 const $=load(fs.readFileSync(file,'utf8'));
 const route='/'+path.relative(root,file).replace(/index\.html$/,'').replace(/\\/g,'/');
 const check=(value,msg)=>{if(!value)errors.push(`${route}: ${msg}`);};
 check($('h1').length===1,'Expected one h1');
 const title=$('title').text(),description=$('meta[name="description"]').attr('content');
 check(Boolean(title)&&!titles.has(title),'Missing/duplicate title');titles.add(title);
 check(Boolean(description)&&!descriptions.has(description),'Missing/duplicate description');descriptions.add(description);
 check($('link[rel="canonical"]').attr('href')==='https://kinmenguide.com'+(route==='/404.html'?'/404/':route),'Incorrect canonical');
 check($('meta[name="robots"]').attr('content')===(noindexRoutes.has(route)?'noindex, follow':'index, follow, max-image-preview:large'),'Incorrect robots meta');
 check($('html').attr('lang')==='zh-Hant-TW','Incorrect locale');
 for(const key of ['og:title','og:description','og:image','og:url','og:locale'])check(Boolean($(`meta[property="${key}"]`).attr('content')),`Missing ${key}`);
 $('script[type="application/ld+json"]').each((_,el)=>{try{const s=JSON.parse($(el).text());check(s['@context']==='https://schema.org','Invalid JSON-LD context');schemas+=s['@graph'].length;}catch{check(false,'Invalid JSON-LD');}});
 const ids=new Set();$('[id]').each((_,el)=>{const id=$(el).attr('id');check(!ids.has(id),`Duplicate ID ${id}`);ids.add(id);});
 $('img').each((_,el)=>{images++;check(Boolean($(el).attr('alt')),'Image missing alt');check(Boolean($(el).attr('width'))&&Boolean($(el).attr('height')),'Image missing dimensions');});
 $('a[href],img[src],script[src],link[rel="stylesheet"][href],meta[property="og:image"]').each((_,el)=>{
  const value=$(el).attr('href')||$(el).attr('src')||$(el).attr('content');if(!value||/^(mailto:|tel:|data:)/.test(value))return;
  let url;try{url=new URL(value,'https://kinmenguide.com'+route);}catch{check(false,`Invalid URL ${value}`);return;}
  if(url.origin!=='https://kinmenguide.com')return;
  links++;
  let target=fileFor(decodeURIComponent(url.pathname));
  if(!fs.existsSync(target)&&!path.extname(target))target=path.join(target,'index.html');
  check(fs.existsSync(target),`Broken local target ${value}`);
  if(url.hash&&fs.existsSync(target)&&target.endsWith('.html')){const doc=target===file?$:load(fs.readFileSync(target,'utf8'));const id=decodeURIComponent(url.hash.slice(1));check(doc('[id]').toArray().some(n=>doc(n).attr('id')===id),`Missing anchor ${value}`);}
 });
}
const sitemapIndex=load(fs.readFileSync(path.join(root,'sitemap-index.xml'),'utf8'),{xmlMode:true});
assert.deepEqual(sitemapIndex('sitemap loc').map((_,el)=>sitemapIndex(el).text()).get(),['https://kinmenguide.com/sitemap-0.xml']);
const sitemap=load(fs.readFileSync(path.join(root,'sitemap-0.xml'),'utf8'),{xmlMode:true});
const sitemapUrls=sitemap('url').map((_,el)=>({loc:sitemap(el).find('loc').text(),lastmod:sitemap(el).find('lastmod').text()})).get();
const expectedUrls=routes.filter(r=>!noindexRoutes.has(r)).map(r=>'https://kinmenguide.com'+r);
assert.deepEqual(sitemapUrls.map(item=>item.loc).sort(),expectedUrls.sort(),'Sitemap must list every and only indexable canonical URL once');
for(const {loc,lastmod} of sitemapUrls){
 const url=new URL(loc);
 assert.equal(url.origin,'https://kinmenguide.com');
 const match=url.pathname.match(/^\/([a-z-]+)\/([a-z0-9-]+)\/$/);
 const source=match&&path.join('src/content',match[1],`${match[2]}.md`);
 if(source&&fs.existsSync(source)){
  const raw=fs.readFileSync(source,'utf8');
  const frontmatter=raw.match(/^---\n([\s\S]*?)\n---/);
  assert.ok(frontmatter,`Missing frontmatter for ${url.pathname}`);
  const updatedAt=JSON.parse(frontmatter[1]).updatedAt;
  assert.equal(lastmod.slice(0,10),updatedAt,`Incorrect lastmod for ${url.pathname}`);
 }else assert.equal(lastmod,'',`Undocumented lastmod for ${url.pathname}`);
}
assert.ok(fs.readFileSync(path.join(root,'robots.txt'),'utf8').includes('https://kinmenguide.com/sitemap-index.xml'));
const pkg=JSON.parse(fs.readFileSync('package.json','utf8'));assert.match(pkg.packageManager,/^pnpm@\d+\.\d+\.\d+$/);
for(const group of ['dependencies','devDependencies'])for(const [name,version]of Object.entries(pkg[group]))assert.match(version,/^\d+\.\d+\.\d+$/,`${name} must be exact stable semver`);
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
console.log(`Verified ${files.length} pages; ${links} internal references; ${images} image instances; ${schemas} schema nodes. Titles, descriptions, canonicals, links, anchors, sitemap, robots and exact versions pass.`);

await import('./verify-photos.mjs');
await import('./verify-businesses.mjs');
