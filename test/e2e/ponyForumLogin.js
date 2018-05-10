var config = require('../../nightwatch.conf.js');

module.exports = { // adapted from: https://git.io/vodU0
  '@tags': ['ponyForum'],
  'pony login start': function(browser) {
    browser
      .url('https://mlpforums.com/')
      .pause(1000)
      .click('i[class="fa fa-navicon"]')
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + 'pony01.png')
      .pause(1000)
      .click('ul[class="ipsToolList ipsToolList_vertical"] li a')
      .pause(3000)
      .saveScreenshot(config.imgpath(browser) + 'pony02.png')
      .setValue('input[name="username"]', 'RaincloudPony2005')
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + 'pony03.png')
      .setValue('input[name="password"]', ['matsi7Salasoovi', browser.Keys.ENTER])
      .pause(3000)
      .saveScreenshot(config.imgpath(browser) + 'pony04.png')
      .getLocationInView('a[class="ipsButton ipsButton_medium ipsButton_important ipsButton_fullWidth"]')
      .pause(1000)
      .click('a[class="ipsButton ipsButton_medium ipsButton_important ipsButton_fullWidth"]')
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + 'pony05.png')
      .click('span[class="ipsSelectTree_expand"]')
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + 'pony06.png')
      .saveScreenshot(config.imgpath(browser) + 'pony07.png')
      .saveScreenshot(config.imgpath(browser) + 'pony08.png')
      .saveScreenshot(config.imgpath(browser) + 'pony09.png')
      .saveScreenshot(config.imgpath(browser) + 'pony10.png')
      .saveScreenshot(config.imgpath(browser) + 'pony11.png')
      .saveScreenshot(config.imgpath(browser) + 'pony12.png')
      .saveScreenshot(config.imgpath(browser) + 'pony13.png')
      .end();
  }
}