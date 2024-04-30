import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("Admin Login Successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.showLoginPage();
  await expect(page).toHaveTitle(/.*OrangeHRM/);

  await loginPage.doLogin("admin", "admin123");
  await expect(page.url()).toBe(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );
  await expect(page.locator(".oxd-topbar-header-breadcrumb-module")).toHaveText(
    "Dashboard"
  );
});

test("Admin Can't Login By Using Invalid Credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.showLoginPage();
  await expect(page).toHaveTitle(/.*OrangeHRM/);

  await loginPage.doLogin("sagar", "sagar123");
  await expect(page.locator(".oxd-alert-content-text")).toHaveText(
    "Invalid credentials"
  );
});
