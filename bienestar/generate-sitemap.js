import { writeFileSync } from 'fs';
import { join } from 'path';

// Define the base URL of your site
const BASE_URL = 'https://dietasbalance.vercel.app'; // Cambia esto por el dominio real de tu web

// Define the pages you want to include in your sitemap
const pages = [
    '', // Home
    'contacto',
    'consejos',
    'privacy',
    'dietas',
    'dash',
    'flexitariana',
    'keto',
    'mediterranea',
    'paleo',
    'hidratate',
    'ejercicio',
    'descanso',

];

// Generate the sitemap content
const generateSitemap = () => {
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map(page => `
    <url>
        <loc>${BASE_URL}/${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    `).join('')}
</urlset>`;

    // Write the sitemap.xml file
    writeFileSync(join(process.cwd(), 'public', 'sitemap.xml'), sitemapContent.trim());
    console.log('Sitemap generated successfully!');
};

// Run the sitemap generator
generateSitemap();
