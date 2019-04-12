const config = require('../../nightwatch.conf.js');
var searchword = "duck";

module.exports = {
    'Duck search "duck"': function (browser) {
	browser
	    .url('https://duckduckgo.com') // visit the url
	    .waitForElementVisible('body') // wait for the body to be rendered
	    .assert.title('DuckDuckGo — Privacy, simplified.')
	    .saveScreenshot(`${config.imgpath(browser)}duckduckgo.png`)
	    .setValue('input[name=q]', searchword)
	    .click('input[id=search_button_homepage]')
	    .assert.title(searchword + ' at DuckDuckGo')
	    .waitForElementVisible('body') // wait for the body to be rendered
	    .saveScreenshot(`${config.imgpath(browser)}duckduckgo.png`)
	    .pause(1000)
	    .click('a.zcm__link.js-zci-link.js-zci-link--images')
	    .pause(1000)
	    .saveScreenshot(`${config.imgpath(browser)}duckduckgo.png`)
	    .click('img.tile--img__img.js-lazyload')
	    .saveScreenshot(`${config.imgpath(browser)}duckduckgo.png`)
	    .end();
    }
};

