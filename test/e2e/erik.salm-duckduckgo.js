const conf = require('../../nightwatch.conf.js');

module.exports = {
  'DuckDuckGo search cat': function (browser) {
    browser
      .url('http://www.duckduckgo.com') // visit the url
      .waitForElementVisible('body')// wait for the body to be rendered
      .setValue('input[name=q]', 'cat')
      .pause(2000)
      .click('input[type=submit]')
      .saveScreenshot(`${conf.imgpath(browser)}duck1.png`)
      .assert.title('cat at DuckDuckGo')
      .waitForElementVisible('body')
      .assert.containsText('body','cats')
      .click('a.zcm__link.js-zci-link.js-zci-link--images')
      .saveScreenshot(`${conf.imgpath(browser)}duck2.png`)
      .click('div.tile.tile--img.has-detail:first-of-type')
      .saveScreenshot(`${conf.imgpath(browser)}duck3.png`)
      .pause(3000)
      .end();
  },
};
