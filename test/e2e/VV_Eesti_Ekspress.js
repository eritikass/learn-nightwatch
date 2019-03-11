var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
  'Eesti Ekspress Search for "cringe", click on a selected article and accept cookies': function(browser) {
    browser
	  .resizeWindow(1280, 1280)
      .url('https://ekspress.delfi.ee/')
      .pause(100)
      .waitForElementVisible('body')
      .pause(500)
	  .saveScreenshot(`${config.imgpath(browser)}eesti-ekspress-frontpage.png`)
	  .pause(100)
	  .setValue('.header-search__input', "cringe")
      .pause(500)
      .click('div[class="header-search"] form button')
      .pause(500)
      .saveScreenshot(`${config.imgpath(browser)}search-form-cringe.png`)
      .pause(100)
	  .click('a[href="/elu/tahad-moista-mida-sinu-laps-motleb-kui-huuab-full-xd-siis-loe-seda?id=79467566"]')
      .pause(500)
	  .saveScreenshot(`${config.imgpath(browser)}eesti-ekspress-article.png`)
	  .pause(100)
	  .click('a[href="http://www.lehed.ee/conditions-et"]')
	  .saveScreenshot(`${config.imgpath(browser)}eesti-ekspress-article-accept-cookies.png`)
	  //.end();
	  
  }
};