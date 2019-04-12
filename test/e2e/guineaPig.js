const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['guineaPig'],
  'Guinea Pig Assert Title': function (browser) {
    browser
      .url('https://saucelabs.com/test/guinea-pig')
      .waitForElementVisible('body')
      .pause(1000)
      .assert.title('I am a page title - Sauce Labs')
      .saveScreenshot(`${config.imgpath(browser)}a-screenshot-description.png`)
      .clearValue('#i_am_a_textbox') //teeb kasti tühjaks
      .setValue('#i_am_a_textbox', 'nightwatch roolz!') //sisestan
      .pause(2000)
      .setValue('#fbemail', 'jaana@mail.hehe')//Inspectiga võtan välja et kasti nimi on fbemail
      .pause(2000)
      .setValue('#comments', 'blablabla')
      .pause(2000)
      .saveScreenshot(`${config.imgpath(browser)}nightwatch-roolz.png`)
      .end();
  },
};
