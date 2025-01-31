import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express, { Request, Response, NextFunction } from 'express';
import compression from 'compression';
import helmet from 'helmet';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import * as fs from 'fs';
import bootstrap from './src/main.server';

// Generate robots.txt
const generateRobotsTxt = (baseUrl: string) => {
  const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml`;

  fs.writeFileSync('dist/browser/robots.txt', robotsTxt);
};

// Generate sitemap.xml
const generateSitemapXml = (baseUrl: string) => {
  const pages = [
    '',
    '/about',
    '/products',
    '/quality-assurance',
    '/research',
    '/contact-us'
  ];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  fs.writeFileSync('dist/browser/sitemap.xml', sitemapContent);
};

const server = express();
const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

const commonEngine = new CommonEngine();

// ✅ Use compression for GZIP/Brotli support (Improves load time)
server.use(compression());

// ✅ Security best practices (Prevents vulnerabilities)
server.use(
  helmet({
    contentSecurityPolicy: false, // Adjust if needed
  })
);

// ✅ Serve static files efficiently
server.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    setHeaders: (res, path) => {
      if (path.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      } else {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
    },
  })
);

// ✅ Serve robots.txt
server.get('/robots.txt', (req, res) => {
  res.type('text/plain').send(
    `User-agent: *\nAllow: /\nSitemap: ${req.protocol}://${req.get('host')}/sitemap.xml`
  );
});

// ✅ Serve sitemap.xml
server.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${req.protocol}://${req.get('host')}/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
  </urlset>`);
});

// ✅ Handle all other routes via Angular Universal
server.get('*', (req: Request, res: Response, next: NextFunction) => {
  const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
});

// ✅ Global Error Handling (Prevents SEO index issues)
server.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Server Error:', err);
  res.status(500).send('<h1>500 - Server Error</h1><p>Something went wrong.</p>');
});

// ✅ Start the server
const port = process.env['PORT'] || 4000;
server.listen(port, () => {
  console.log(`✅ Server running at: http://localhost:${port}`);
});
