class BasePage {
  constructor(page) {
    this.page = page;
  }

  async visit(path = '') {
    await this.page.goto(path);
  }

  async getURL() {
    return this.page.url();
  }

  async waitForSelector(selector) {
    await this.page.waitForSelector(selector);
  }

  async click(locator) {
    await locator.click();
  }

  async fill(locator, value) {
    await locator.fill(value);
  }
}

module.exports = BasePage;