const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['reddit'],
  'Open google': function (browser) {
    // load google
    browser
      .resizeWindow(1280,800)
      .url('https://old.reddit.com/')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}reddit1.png`);

    // open movies
    browser
      .click('a[href="https://old.reddit.com/r/movies/"][class="choice"]')
      .pause(3000)
      .saveScreenshot(`${config.imgpath(browser)}movies.png`)
      .end();
  },
};
