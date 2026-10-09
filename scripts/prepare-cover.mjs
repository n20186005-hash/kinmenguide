import sharp from 'sharp';
// Rasterize only this trusted, repository-owned vector; keep arbitrary SVG processing disabled.
await sharp('src/assets/guide-cover.svg').jpeg({ quality: 90 }).toFile('public/og-guide.jpg');
