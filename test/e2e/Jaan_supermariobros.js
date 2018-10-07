const config = require('../../nightwatch.conf.js');

module.exports = {
  '@tags': ['supermariobros'],
  'Play Super Mario Bros': function (browser) {
    browser
      .url('https://supermarioemulator.com/')
      .waitForElementVisible('body')
      .pause(100)
      .click('a[href="mario.php"]')
    
    browser
      .pause(3500)
      .sendKeys('body', 'm') //Mutes game

      //.end()
  }
};