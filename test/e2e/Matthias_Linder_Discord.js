const config = require('../../nightwatch.conf.js');

module.exports = {
  '@tags': ['discord'],

  'Open discord': function (browser) {
    browser
    browser.resizeWindow(1920, 1080)
      .url('https://discordapp.com/')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}DiscordWelcomePage.png`);

// Open Discord Blog

    browser
      .click('a[class="mainNavLink-Z3uwQ7 navLink-DPGG6D"]')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}PersonalDiscord.png`)
      .end();
  },
};
