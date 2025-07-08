const puppeteer = require('puppeteer');
const fs = require('fs');

const dashboards = [
    { name: 'dashboard-sales', url: 'https://dashboard-sales.vercel.app' },
    { name: 'dashboard-projects', url: 'https://dashboard-projects.vercel.app' },
];

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    for (const { name, url } of dashboards) {
        await page.goto(url, { waitUntil: 'networkidle2' });
        await page.setViewport({ width: 1280, height: 720 });

        await page.screenshot({ path: `thumbnails/${name}.png` });
        console.log(`✅ Screenshot saved for ${name}`);
    }

    await browser.close();
})();
