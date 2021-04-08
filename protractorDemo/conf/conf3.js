exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: "chrome",
  },

  // Framework to use. Jasmine is recommended.
  framework: "jasmine",

  // Disable Webdriver Control Flow
  SELENIUM_PROMISE_MANAGER: false,

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ["../tests/spec3.js"],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },
};
