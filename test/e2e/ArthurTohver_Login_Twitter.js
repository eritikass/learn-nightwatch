var config = require('../../nightwatch.conf.js');

module.exports = { 
  '@tags': ['BoyishGiggles'],
  'Twitter Login :)': function(browser) {
    browser
      .url('http://boyishgiggles.com/')
      .waitForElementVisible('body')
      .pause(1000)
      .assert.containsText('#transparent','I want to be completely transparent...')
      .saveScreenshot(config.imgpath(browser) + 'BoyishGiggles.png')
      .pause(1000)
      .waitForElementVisible('twitterwidget#twitter-widget-0',1000)
      .pause(500)
      .click('twitterwidget#twitter-widget-0')
      .moveToElement('twitterwidget#twitter-widget-0', 0, 0)
      .mouseButtonClick(0)
      .pause(2500)
      .waitForElementVisible('a[class="LoginDialog-signupLink"]',2000)
      .pause(2500)
      .click('a[class="LoginDialog-signupLink"]')
      .pause(500)
      .waitForElementVisible('a[id="signin-link"]',10)
      .pause(1000)
      
      //.assert.containsText('DisRespect')
      .pause(500)
      .setValue('input[session[username_or_email]]', 'boyishgiggles')
      .pause(500)
      .setValue('input[session[password]]')
      .pause(500)
      .saveScreenshot(config.imgpath(browser) + 'logindata.png')
      .pause(1000)
      .end();
  }
};
