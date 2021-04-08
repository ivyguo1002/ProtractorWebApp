const { browser } = require("protractor");

class HomePage {
  constructor() {
    this.firstNumber = element(by.model("first"));
    this.secondNumber = element(by.model("second"));
    this.goButton = element(by.id("gobutton"));
    this.latestResult = element(by.binding("latest"));
    this.history = element.all(by.repeater("result in memory"));
  }

  async open() {
    await browser.get("http://juliemr.github.io/protractor-demo/");
  }

  get title() {
    return browser.getTitle();
  }

  async add(a, b) {
    await this.firstNumber.sendKeys(a);
    await this.secondNumber.sendKeys(b);
    await this.goButton.click();
  }

  //   var firstNumber = element(by.model("first"));
  //   var secondNumber = element(by.model("second"));
  //   var goButton = element(by.id("gobutton"));
  //   var latestResult = element(by.binding("latest"));
  //   var history = element.all(by.repeater("result in memory"));
}

module.exports = new HomePage();
