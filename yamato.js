const puppeteer = require('puppeteer');

(async () => {
    // Launch a new browser instance
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Navigate to the Yamato tracking page
    await page.goto('https://track.kuronekoyamato.co.jp/english/tracking');

    // Wait for the form field and enter the tracking number
    await page.waitForSelector('input[name="number01"]');
    await page.type('input[name="number01"]', '4927-0660-6593');

    // Click the "Track" button using the specific selector
    await page.click('button.parts-button.parts-button-medium.type-black');

    // Wait for the result page to load
    await page.waitForNavigation();

    // Extract and print the results
    const result = await page.evaluate(() => {
        return document.querySelector('body').innerText;
    });

    console.log(result);

    // Close the browser
    await browser.close();
})();
