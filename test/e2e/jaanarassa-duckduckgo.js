const conf = require('../../nightwatch.conf.js');

module.exports = {
  'DuckDuckGo search cats': function (browser) {
    browser
      .url('https://duckduckgo.com') 
      .waitForElementVisible('body')
      .pause(5000)
      .waitForElementVisible('#search_form_input_homepage') //oota kuni element laeb
      .setValue('#search_form_input_homepage', 'cat')
      .saveScreenshot(`${conf.imgpath(browser)}.screen1.png`)
      .pause(2000)
      .click('#search_button_homepage')//id tähis #
      .saveScreenshot(`${conf.imgpath(browser)}screen2.png`)      
      .pause(2000)
      .assert.title('cat at DuckDuckGo')
      .click('a.zcm__link.js-zci-link.js-zci-link--images')
      .saveScreenshot(`${conf.imgpath(browser)}screen4.png`)      
      .pause(2000)
      .click('.tile--img__img.js-lazyload')
      .saveScreenshot(`${conf.imgpath(browser)}screen5.png`)
      .assert.containsText('body', 'cat')
      .end();
   },
};     