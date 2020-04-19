const config = require('../../nightwatch.conf.js');

module.exports = {
  'Ekspress ->Kirjandus': function Ekspress(browser) {
    browser
      .url('https://ekspress.delfi.ee/')
      .waitForElementVisible("body", 1000)
      .useXpath()
      .click("//a[@href='areen']", 'Areen')
//*[@id="header"]/div[1]/div[2]/div[2]/div[1]/ul/li[5]/a
      .end();
    },
  };