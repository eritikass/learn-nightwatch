const config = require('../../nightwatch.conf.js');

module.exports = {
  'Ilm Espoos': function (browser) {
    browser
      .url('https://ilmatieteenlaitos.fi/')
      .waitForElementVisible('body')
      .assert.title('Etusivu - Ilmatieteen laitos')
      .setValue('input[name=place]', 'Espoo')
      .pause(1000)
      .click('input[name=changelocation')
      .saveScreenshot(`${config.imgpath(browser)}itl.png`)
      .pause(1000)
      .click('a.navbar-brand.sub-navigation-title')
      .pause(5000)
      .end();
  }}