import { chromium } from 'playwright';

describe('Login to saucelabs "The Internet" website', () => {
  it('Should successfully login when valid credentials are used', async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    const context = await browser.newContext();
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.screenshot();
    await context.close();
    browser.close();
  });
});
