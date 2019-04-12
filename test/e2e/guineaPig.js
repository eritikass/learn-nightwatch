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
      .clearValue('#i_am_a_textbox')
      .pause(2000)
      .setValue('#i_am_a_textbox', 'nightwatch roolz!')
      .pause(2000)
      .setValue('#fbemail', 'marko.veldt@tptlive.ee')
      .pause(2000)
      .setValue('#comments', 'Lisame kommentaare elementidesse')
      .pause(2000)
      .saveScreenshot(`${config.imgpath(browser)}nightwatch-roolz.png`)
      .end();
  },
};
