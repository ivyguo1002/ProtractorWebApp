const { browser, element } = require("protractor");
const HomePage = require("../pages/home.page");

describe("Protractor Demo App", function () {
  beforeEach(async () => {
    await HomePage.open();
  });

  it("should have a title", async function () {
    expect(await HomePage.title).toEqual("Super Calculator");
  });

  it("should add one and two", async function () {
    await HomePage.add(1, 2);
    expect(await HomePage.latestResult.getText()).toEqual("3");
  });

  it("should add four and six", async function () {
    await HomePage.add(4, 6);
    expect(await HomePage.latestResult.getText()).toEqual("10");
  });

  it("should read the value from an input", async function () {
    await HomePage.firstNumber.sendKeys(1);
    expect(await HomePage.firstNumber.getAttribute("value")).toEqual("1");
  });

  it("should have a history", async function () {
    await HomePage.add(1, 2);
    await HomePage.add(3, 4);

    expect(await HomePage.history.count()).toEqual(2);

    HomePage.add(5, 6);

    expect(await history.count()).toEqual(0); // This is wrong!
  });
});
