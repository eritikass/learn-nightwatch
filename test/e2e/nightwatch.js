const config = require('../../nightwatch.conf.js');

module.exports = {
  'Nightwatch API': function Nightwatch(browser) {
    browser
      .url("https://nightwatchjs.org/")
      .waitForElementVisible("body", 2000) // css
      /*.useXpath()
      .click('//*[@id="navbar"]/ul/li[4]/a') // xpath
      .useCss()
      .waitForElementVisible("body", 1000)
      .useXpath()
      .click("//*[@id='api-container']/div[2]/div/div/div[1]/div/ul/li[2]/a")
      .click("//*[@id='api-container']/div[2]/div/div/div[1]/div/ul/li[2]/ul/li[20]/a")
      .useCss()
      .assert.containsText("//*[@id='#expect-elements-count']", ".elements().count")
      .saveScreenshot(`${config.imgpath(browser)}nightwatch-api.png`)*/
      .end();
    },
  };