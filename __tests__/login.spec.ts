import { Browser, BrowserContext, chromium, Page } from 'playwright';

let browser: Browser;
let page: Page;
let context: BrowserContext;

beforeAll(async () => {
	browser = await chromium.launch();
	page = await browser.newPage();
});

afterAll(async () => {
	browser.close();
});

beforeEach(async () => {
	context = await browser.newContext();
	await page.goto('https://the-internet.herokuapp.com/login');
});

afterEach(async () => {
	context.close();
});

describe('Login to saucelabs "The Internet" website', () => {
	it('Should successfully login when valid credentials are used', async () => {
		await login('tomsmith', 'SuperSecretPassword!');

		await assertMessageIs('You logged into a secure area!');
	});

	it('Should prevent login when invalid credentials are used', async () => {
		await login('invalidUsername', 'password');

		await assertMessageIs('Your username is invalid!');
	});
});

const login = async (username: string, password: string) => {
	await page.fill('id=username', username);
	await page.fill('id=password', password);
	await page.click('button:has-text("Login")');
};

const assertMessageIs = async (message: string) => {
	const flashElement = await page.textContent('#flash');
	expect(flashElement).toContain(message);
};
