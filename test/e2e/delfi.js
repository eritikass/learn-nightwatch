const conf = require('../../nightwatch.conf.js');

module.exports = {
  'Delfi kommentaator': function (browser) {
    browser
      .url('http://www.delfi.ee') // visit the url
      .waitForElementVisible('body')// wait for the body to be rendered
      .assert.title('DELFI - Värsked uudised Eestist ja välismaalt - DELFI')
      .click('a.headline__comments:first-of-type')
      .pause(5000)
      .saveScreenshot(`${conf.imgpath(browser)}delfi1.png`)
      .click('div.reaction[title=Like]')
      .setValue('input.input-name', 'pott')
      .setValue('textarea.input-message', 'EKRE!')
      .click('button[type=submit]')
      .pause(10000)
      .saveScreenshot(`${conf.imgpath(browser)}delfi2.png`)
      .end();
  },
};
