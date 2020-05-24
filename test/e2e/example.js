const config = require('../../nightwatch.conf.js');

module.exports = {
  Example: function Example(browser) {
    browser
      .url('http://example.com')
      .waitForElementVisible('body', 2000) // css
      .assert.containsText('body', 'Example Domain') // css
      .useXpath()
      .assert.containsText("//a[@href='https://www.iana.org/domains/example']", 'More information...') // xpath
      .saveScreenshot(`${config.imgpath(browser)}exampledomain.png`)
      .click("//a[@href='https://www.iana.org/domains/example']")
      .useCss()
      .waitForElementVisible('body', 2000) // css
      .assert.title('IANA — IANA-managed Reserved Domains')
      .saveScreenshot(`${config.imgpath(browser)}IANA.png`)
      .end();
  },

};
