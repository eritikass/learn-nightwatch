const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['reddit'],
  'Open reddit': function (browser) {
    // load new reddit
    browser
	  .resizeWindow(1280, 800)
	  .url('https://www.reddit.com')
      .pause(500)
      .waitForElementVisible('body')
      .pause(500)
      .saveScreenshot(`${config.imgpath(browser)}newreddit.png`);
	// search new reddit
	browser
      .setValue('#header-search-bar', ['worldnews', browser.Keys.ENTER])
	  .pause(500)
	  .waitForElementVisible('body')
      .saveScreenshot(`${config.imgpath(browser)}worldnews.png`)

	// go to worldnews subreddit
    browser
	  .click('div[class="jd7cdm-4 lakKvl"]')
	  .pause(500)
      .saveScreenshot(`${config.imgpath(browser)}newssubreddit.png`);
	// sort by "top of 24hrs"
	browser
	  .click('div[class="s1vspxim-0 cpAOsy"]')
	  .pause(50)
	  .click('svg[class="s1qt4be1-3 cAaFtO"]')
	  .pause(600)
	  .saveScreenshot(`${config.imgpath(browser)}topofnewstoday.png`);
  },
};
