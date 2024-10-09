// generate-sitemap.mjs
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

const sitemap = new SitemapStream({ hostname: 'https://dietasbalance.vercel.app' });

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/contacto', changefreq: 'daily', priority: 0.8 },
  { url: '/consejos', changefreq: 'daily', priority: 0.5 },
  { url: '/privacy', changefreq: 'daily', priority: 0.8 },
  { url: '/dietas', changefreq: 'daily', priority: 0.8 },
  { url: '/dietas/dash', changefreq: 'daily', priority: 0.8 },
  { url: '/dietas/flexitariana', changefreq: 'daily', priority: 0.8 },
  { url: '/dietas/keto', changefreq: 'daily', priority: 0.8 },
  { url: '/dietas/mediterranea', changefreq: 'daily', priority: 0.8 },
  { url: '/dietas/paleo', changefreq: 'daily', priority: 0.8 },
  { url: '/consejos/hidratacion', changefreq: 'daily', priority: 0.8 },
  { url: '/consejos/ejercicio', changefreq: 'daily', priority: 0.8 },
  { url: '/consejos/descanso', changefreq: 'daily', priority: 0.8 },

];

links.forEach(link => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap)
  .then((data) => {
    const writeStream = createWriteStream(resolve('public', 'sitemap.xml'));
    writeStream.write(data);
    writeStream.end();
    console.log('Sitemap creado exitosamente!');
  })
  .catch((err) => {
    console.error('Error al crear el sitemap:', err);
  });