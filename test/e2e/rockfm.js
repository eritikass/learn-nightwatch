const config = require('../../nightwatch.conf.js');

module.exports = {
  '@tags': ['guineaPig'],
  'Guinea Pig Assert Title': function (browser) {
    browser
      .url('https://sky.ee/tag/rockfm/#RockFM')
      .waitForElementVisible('body')
      .pause(5000)
      .saveScreenshot(`${config.imgpath(browser)}esileht.png`)
      .click('#main-radio-controls-wrap .head-play-wrap .player-off')
      .pause(15000)
      
      .end();
  },
};
