const config = require ('../../nightwatch.conf.js');

module.exports = {
  "Rate-login-regkasutaja-test": function (browser) {
    browser.url('https://rate.ee/login')
    browser.waitForElementVisible('body') 
    .pause(3000)
    browser.click('a.icn-messages')
    browser.waitForElementVisible('body')
    .pause(3000)
    browser.assert.containsText('body', "Seda lehte näevad ainult registreeritud kasutajad.") 
    browser.saveScreenshot(`${config.imgpath(browser)}rate-ee-login-reg-kasutaja.png`)
    browser.end();
  },
};


