import { test, expect, Page, Browser } from '@playwright/test';
import { chromium } from 'playwright';
import { HomePage } from '../../main/ui/HomePage';

let browser: Browser;
let context: any;
let pageObj: Page;

test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    pageObj = await context.newPage();
    await pageObj.setDefaultTimeout(60000);
});

// Global teardown: runs once after all tests
test.afterAll(async () => {
    await browser.close();
});

test.describe.serial('Search Amazon product', () => {

    //Creating node
    test('Search a product on Amazon website', async () => {
        const homePage = new HomePage(pageObj);
        const firstResultText = await homePage.searchProduct('iPhone');
        console.log('firstResultText:', firstResultText);
        expect(firstResultText).not.toBeNull();
        expect(firstResultText).toContain('Apple iPhone');
    });
});
