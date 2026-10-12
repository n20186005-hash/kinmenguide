import fs from 'node:fs';
import assert from 'node:assert/strict';
import sharp from 'sharp';
import { load } from 'cheerio';
const credits=JSON.parse(fs.readFileSync('src/data/photos.json','utf8'));
const pending=JSON.parse(fs.readFileSync('verification/attraction-photo-pending.json','utf8'));
const files=fs.readdirSync('src/assets/photos').filter(f=>f.endsWith('.jpg'));
assert.deepEqual(files.map(f=>f.slice(0,-4)).sort(),Object.keys(credits).sort(),'Photo assets and credits must match');
for(const [key,p] of Object.entries(credits)){
 for(const field of ['alt','author','license','licenseUrl','source','original','changes'])assert.ok(p[field]?.trim(),`${key}: missing ${field}`);
 for(const field of ['source','original','licenseUrl'])assert.match(p[field],/^https?:\/\//,`${key}: invalid ${field}`);
 const {info}=await sharp(`src/assets/photos/${key}.jpg`).raw().toBuffer({resolveWithObject:true});
 assert.ok(info.width>0&&info.height>0,`${key}: invalid image`);
 const $=load(fs.readFileSync('dist/credits/index.html','utf8'));
 assert.equal($(`#${key} img`).length,1,`${key}: missing credit image`);
}
let total=0,covered=0;const missing=[];
for(const file of fs.readdirSync('src/content/attractions').filter(f=>f.endsWith('.md'))){
 total++;const slug=file.slice(0,-3);const d=JSON.parse(fs.readFileSync(`src/content/attractions/${file}`,'utf8').split('---')[1]);
 const $=load(fs.readFileSync(`dist/attractions/${slug}/index.html`,'utf8'));
 if(!d.image){missing.push(slug);assert.equal($('.article-cover').length,0);continue;}
 covered++;assert.ok(credits[d.image],`${slug}: missing credit`);
 assert.equal($('.article-cover img').length,1,`${slug}: missing cover`);
 assert.equal($('.article-cover img').attr('alt'),credits[d.image].alt,`${slug}: wrong alt`);
 assert.equal($('.article-cover a').attr('href'),`/credits/#${d.image}`,`${slug}: missing attribution`);
 assert.match($('meta[property="og:image"]').attr('content'),/\/_astro\//,`${slug}: missing photo OG`);
}
assert.deepEqual(missing.sort(),pending.map(p=>p.slug).sort(),'Update the pending photo audit when coverage changes');
console.log(`Photo audit passed: ${Object.keys(credits).length} decodable credited assets; ${covered}/${total} attractions with photographs; ${missing.length} explicitly documented pending.`);
