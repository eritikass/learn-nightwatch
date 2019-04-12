const config = require('../../nightwatch.conf.js');

module.exports = {
  'Google search cat': function (browser) {
    browser
      .url('https://www.google.com/')
      .waitForElementVisible('body') //oota, kuni avab lk ehk body
      .pause(1000)
      .assert.title('Google')
      .saveScreenshot(`${config.imgpath(browser)}google1.png`)
      .pause(1000)
      .assert.containsText('body', 'cat')
      .pause(1000)
      .setValue('input[name=q]', 'cat') //input on sisestulahter
      .pause(2000)
      .click('input[name=btnK]')
      .pause(2000)
      .saveScreenshot(`${config.imgpath(browser)}google2.png`)
      .assert.containsText('body', 'cat') //teeb kindlaks, et sellel bodyl e lehel on sõna cat.
      .end();
  },
};
