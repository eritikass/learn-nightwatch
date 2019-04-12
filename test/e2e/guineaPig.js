const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['guineaPig'],
  'Guinea Pig Assert Title': function (browser) {
    browser
      .url('https://saucelabs.com/test/guinea-pig')
      .waitForElementVisible('body')
      .pause(5000)
      .assert.title('I am a page title - Sauce Labs')
      .saveScreenshot(`${config.imgpath(browser)}a-screenshot-description.png`)
      .clearValue('#i_am_a_textbox')
      .pause(5000)
      .setValue('#i_am_a_textbox', 'nightwatch-roolz!')
      .pause(5000)
      .setValue('#fbemail', 'email@email.ee')
      .pause(5000)
      .setValue('#comments', 'Hello World!')
      .pause(5000)
      .saveScreenshot(`${config.imgpath(browser)}nightwatch-roolz.png`)
      .pause(1000)
      .end();
  },
};
