var config = require('../../nightwatch.conf.js')

module.exports = {
  '@tags': ['BoyishGiggles'],
  before: function (browser) {
    browser.resizeWindow(1300, 800)
  },
  'Twitter Login :)': function (browser) {
    browser
      .url('https://twitter.com/')

      .waitForElementVisible('body')
      .pause(1000)
      .assert.urlContains('twitter')
      .saveScreenshot(config.imgpath(browser) + 'twitterstart.png')
      .pause(500)
      .setValue('input[name="session[username_or_email]"]', 'boyishgiggles11')
      .pause(500)
      .setValue('input[name="session[password]"]', 'DOMEGALULC')
      .pause(500)

      .click('input[value="Log in"]')
      .moveToElement('input[value="Log in"]', 0, 0)
      .mouseButtonClick(0)
    // .assert.containsText('DisRespect')
      .pause(1000)
      .waitForElementVisible('div#tweet-box-home-timeline.tweet-box.rich-editor')
      .click('div#tweet-box-home-timeline.tweet-box.rich-editor')
      .moveToElement('div#tweet-box-home-timeline.tweet-box.rich-editor', 0, 0)
      .mouseButtonClick(0)
      .pause(5000)
      .setValue('div#tweet-box-home-timeline.tweet-box.rich-editor#div', 'D OMEGALUL C', browser.Keys.ENTER)
      .pause(2500)
      .saveScreenshot(config.imgpath(browser) + 'logindata.png')
      .pause(1000)
      .end()
  }
}
