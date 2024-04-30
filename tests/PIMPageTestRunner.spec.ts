import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import PIMPage from "../pages/PIMPage";
import generateRandomUser from "../utils/Utils";

test("Create New Employee", async ({ page }) => {
  //admin login
  const loginPage = new LoginPage(page);

  //show login page
  await loginPage.showLoginPage();
  //assertion
  await expect(page).toHaveTitle(/.*OrangeHRM/);
  //call login mehtod
  await loginPage.doLogin("admin", "admin123");
  //assertion
  await expect(page.url()).toBe(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );
  //assertion
  await expect(page.locator(".oxd-topbar-header-breadcrumb-module")).toHaveText(
    "Dashboard"
  );

  //pim page create new employee
  const pimPage = new PIMPage(page);
  //generate random name
  const random = generateRandomUser();
  //call create employee method
  await pimPage.createNewEmployee(
    random.firstName,
    random.lastName,
    random.userName
  );
  //wait for next page
  await page.waitForNavigation();
  //assertion
  await expect(page.locator(".orangehrm-main-title").nth(0)).toHaveText(
    "Personal Details"
  );
});
