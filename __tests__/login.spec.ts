import { Browser, BrowserContext, chromium, Page } from 'playwright';

let browser: Browser;
let page: Page;
let context: BrowserContext;

beforeAll(async () => {
	browser = await chromium.launch({ headless: true });
	page = await browser.newPage();
});

afterAll(async () => {
	browser.close();
});

beforeEach(async () => {
	context = await browser.newContext();
});

afterEach(async () => {
	context.close();
});

describe('Login to saucelabs "The Internet" website', () => {
	it('Should successfully login when valid credentials are used', async () => {
		await page.goto('https://the-internet.herokuapp.com/login');
		await page.fill('id=username', 'test');
	});
});
