const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['guineaPig'],
  'Guinea Pig Assert Title': function (browser) {
    browser
      .url('https://saucelabs.com/test/guinea-pig')
      .waitForElementVisible('body')
      .pause(10000)
      .assert.title('I am a page title - Sauce Labs')
      .saveScreenshot(`${config.imgpath(browser)}a-screenshot-description.png`)
      .clearValue('#i_am_a_textbox')
      .pause(10000)
      .setValue('#i_am_a_textbox', 'nightwatch roolz!')
      .pause(10000)
      .clearValue('#fbemail')
      .setValue('#fbemail', 'anna.andreas@tptlive.ee')
      .pause(10000)
      .clearValue('#comments')
      .setValue('#comments', 'test')
      .pause(10000)

      .saveScreenshot(`${config.imgpath(browser)}nightwatch-roolz.png`)
      .pause(10000)
      .end();
  },
};
