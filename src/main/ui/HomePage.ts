import { Page, expect } from '@playwright/test';
import { locators } from '../config/locators';

export class HomePage {
  constructor(private page: Page) { }

  async searchProduct(product: string) {
   
    // Navigate to the URL
    await this.page.goto('https://www.amazon.com/');

    // Enter the product name in the search bar
    await this.page.fill(locators.homePage.searchField, locators.homePage.product);

    // Click on the search button
    await this.page.click(locators.homePage.searchIcon);

    // Wait for the search results to load
    await this.page.waitForSelector('.s-main-slot');

    // Verify that the first result contains the text "Apple iPhone"
    const firstResultText = await this.page.textContent(locators.homePage.firstProductText);
    if (firstResultText && firstResultText.includes('Apple iPhone')) {
      console.log('Test Passed: The first result contains the text "Apple iPhone".');
    } else {
      console.log('Test Failed: The first result does not contain the text "Apple iPhone".');
    }
    return firstResultText;
  }
};
