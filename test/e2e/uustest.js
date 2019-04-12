const conf = require('../../nightwatch.conf.js');

module.exports = {
  'Google search cats': function (browser) {
    browser
      .url('http://www.google.com/') 
      .waitForElementVisible('body')
      .pause(1000)
      .assert.title('Google')
      .saveScreenshot(`${conf.imgpath(browser)}google1.png`)
      .pause(1000)
      .setValue('input[name=q]', 'cat')
      .pause(2000)
      .click('input[name=btnK]') //CLICK!!!!!    
      .pause(5000)
      .saveScreenshot(`${conf.imgpath(browser)}google2.png`)
      .assert.containsText('body', 'cat')
      .end();
   },
};     