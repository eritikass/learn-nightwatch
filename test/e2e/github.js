const conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test GitHub': function Demo(browser) {
    browser
      .url('http://www.github.com/dwyl') // visit the url
      .waitForElementVisible('body'); // wait for the body to be rendered
    // check if we are seeing the Mobile Version of GitHub
    browser.element('css selector', '.switch-to-desktop', (result) => {
      if (result.status !== -1) { // Element exists, do something
        browser.click('.switch-to-desktop')
          .waitForElementVisible('body'); // wait for the body to be rendered
      }
    });
    // part two:
    browser
      .assert.containsText('body', 'dwyl.com') // assert body contains text
      .saveScreenshot(`${conf.imgpath(browser)}dwyl.png`)
      .pause(5)
      browser.pause(5000).resizeWindow(1000,800)// defined window size
      browser.pause(5000).resizeWindow(800,1000)
      browser.pause(5000).end();
  },
};
