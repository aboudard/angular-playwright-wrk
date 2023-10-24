import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to http://localhost:4900/users
  await page.goto('http://localhost:4900/users');

  // Click html
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:4900/users' }*/),
    page.locator('html').click()
  ]);

  // Go to http://localhost:4900/users
  await page.goto('http://localhost:4900/users');

  // Click text=Home
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:4900/home' }*/),
    page.locator('text=Home').click()
  ]);

});