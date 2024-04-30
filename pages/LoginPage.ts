import { Page, Locator } from "@playwright/test";

class LoginPage {
  private page: Page;

  //input fields
  private userNameInputField: Locator;
  private passwordInputField: Locator;
  private loginSubmitButton: Locator;

  /**
   * @param page
   */
  //constructor to create object and locators
  constructor(page: Page) {
    this.page = page;

    this.userNameInputField = page.locator('[name="username"]');
    this.passwordInputField = page.locator('[name="password"]');
    this.loginSubmitButton = page.locator('[type="submit"]');
  }

  async showLoginPage(): Promise<void> {
    //navigate to login page
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }

  /**
   * @param username
   * @param password
   */
  async doLogin(username: string, password: string) {
    await this.userNameInputField.fill(username);
    await this.passwordInputField.fill(password);
    await this.loginSubmitButton.click();
  }
}

export default LoginPage;
