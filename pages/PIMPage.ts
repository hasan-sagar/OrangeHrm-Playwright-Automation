import { Page, Locator } from "@playwright/test";

class PIMPage {
  private page: Page;

  private pimMenu: Locator;
  private employeeAddButton: Locator;
  private loginDetailsToggleButton: Locator;
  private firstNameInputField: Locator;
  private lastNameInputField: Locator;
  private userNameInputField: Locator;
  private passwordInputField: Locator;
  private confirmPasswordInputField: Locator;
  private saveButton: Locator;

  /**
   * @param page
   */

  //constructor to create object and locators
  constructor(page: Page) {
    this.page = page;

    this.pimMenu = page.locator(".oxd-main-menu-item");
    this.employeeAddButton = page.locator(".oxd-button");
    this.loginDetailsToggleButton = page.locator(".oxd-switch-input");
    this.firstNameInputField = page.locator('[name="firstName"]');
    this.lastNameInputField = page.locator('[name="lastName"]');
    this.userNameInputField = page.locator(".oxd-input");
    this.passwordInputField = page.locator('[type="password"]');
    this.confirmPasswordInputField = page.locator('[type="password"]');
    this.saveButton = page.locator('[type="submit"]');
  }

  /**
   * @param firstName
   * @param lastName
   * @param userName
   * @param password
   * @param confimPassword
   */
  async createNewEmployee(
    firstName: string,
    lastName: string,
    userName: string
  ): Promise<void> {
    //this.page.waitForSelector(".oxd-main-menu-item");
    await this.pimMenu.nth(1).click();
    await this.employeeAddButton.nth(2).click();
    await this.loginDetailsToggleButton.click();
    await this.firstNameInputField.fill(firstName);
    await this.lastNameInputField.fill(lastName);
    await this.userNameInputField.nth(5).fill(userName);
    await this.passwordInputField.first().fill("sagar464");
    await this.confirmPasswordInputField.last().fill("sagar464");
    await this.saveButton.first().click();
  }
}
export default PIMPage;
