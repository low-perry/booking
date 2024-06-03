import { test, expect } from '@playwright/test';

const UI_URL = 'http://localhost:5173/';

test('should allow the user to sign in', async ({ page }) => {
  await page.goto(UI_URL);

  // Click the sign in button.
  await page.getByRole('link', { name: 'Sign In' }).click();

  await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();

  // fill the sign in form

  await page.locator('[name=email]').fill("a@a.com");

  await page.locator('[name=password]').fill("12345678");

  // Submit the form.
  await page.getByRole('button', { name: 'Login' }).click();

  // Expects the user to be redirected to the home page.
  await expect(page.getByText("User logged in")).toBeVisible();
  await expect(page.getByRole("link", {name: "My Bookings"})).toBeVisible();
  await expect(page.getByRole("link", {name: "My Hotels"})).toBeVisible();
  await expect(page.getByRole("button", {name: "Sign Out"})).toBeVisible();


});

test("should allow user to register", async ({ page }) => {
  const testEmail = `test-${Math.floor(Math.random() * 90000) + 10000}@test.com`
  await page.goto(UI_URL);

  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Create an account' }).click();
  await expect(page.getByRole('heading', { name: 'Create an Account' })).toBeVisible();

  // fill the register form
  await page.locator('[name=firstName]').fill("John");
  await page.locator('[name=lastName]').fill("Doe");
  await page.locator('[name=email]').fill(testEmail);
  await page.locator('[name=password]').fill("12345678");
  await page.locator('[name=confirmPassword]').fill("12345678");

  // Submit the form.
  await page.getByRole('button', { name: 'Create Account' }).click();

  // Expects the user to be redirected to the home page.
  await expect(page.getByText("Account created successfully")).toBeVisible();
  await expect(page.getByRole("link", {name: "My Bookings"})).toBeVisible();
  await expect(page.getByRole("link", {name: "My Hotels"})).toBeVisible();
  await expect(page.getByRole("button", {name: "Sign Out"})).toBeVisible();



});

