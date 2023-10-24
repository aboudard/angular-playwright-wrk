import { test, expect } from "@playwright/test";

test('basic test', async ({ page }, testInfo) => {
    await page.goto('http://localhost:4900/');
    const title = page.locator('h1');
    await expect(title).toHaveText('sandbox');
    // screenshot
    /* await testInfo.attach("basic", {
      body: await page.screenshot(),
      contentType: "image/png"
    }); */
  });

  test('click edit button', async ({ page }, testInfo) => {
    await page.goto('http://localhost:4900/');
    const editButton = page.locator('button');
    await editButton.click();
    const title = page.locator('h1');
    await expect(title).toHaveText('edit');
    // screenshot
    /* await testInfo.attach("edit", {
      body: await page.screenshot(),
      contentType: "image/png"
    }); */
  });

  test('navigate to users', async ({ page }, testInfo) => {
    await page.goto('http://localhost:4900/');
    const usersLink = page.locator('a[routerLink="users"]');
    await usersLink.click();
    const title = page.locator('h2');
    await expect(usersLink).toHaveClass('active');
    await expect(title).toHaveText('users');
    await expect(page).toHaveURL('http://localhost:4900/users');
    // screenshot
    /* await testInfo.attach("edit", {
      body: await page.screenshot(),
      contentType: "image/png"
    }); */
  });