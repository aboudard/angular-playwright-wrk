import { test, expect } from "@playwright/test";

test('basic test', async ({ page }, testInfo) => {
    // log env.BASE_URL
    console.log('env.BASE_URL', process.env['BASE_URL']);
    await page.goto(process.env['BASE_URL']);
    const title = page.locator('h1');
    await expect(title).toHaveText('sandbox');
    // screenshot
    /* await testInfo.attach("basic", {
      body: await page.screenshot(),
      contentType: "image/png"
    }); */
  });

  test('click edit button', async ({ page }, testInfo) => {
    await page.goto(process.env['BASE_URL']);
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
    await page.goto(process.env['BASE_URL']);
    const usersLink = page.locator('a[routerLink="users"]');
    await usersLink.click();
    const title = page.locator('h2');
    await expect(usersLink).toHaveClass('active');
    await expect(title).toHaveText('users');
    await expect(page).toHaveURL(`${process.env['BASE_URL']}/users`);
    // count users
    const users = page.locator('div.user');
    await expect(users).toHaveCount(5);
    // screenshot
    /* await testInfo.attach("edit", {
      body: await page.screenshot(),
      contentType: "image/png"
    }); */
  });