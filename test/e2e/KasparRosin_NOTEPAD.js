const config = require('../../nightwatch.conf.js');

module.exports = {
  '@tags': ['notepad'],
  'Open notepad': function (browser) {
    
    browser
      .url('https://www.rapidtables.com/tools/notepad.html')
      .pause(1000)
      .waitForElementVisible('body')
      .saveScreenshot(`${config.imgpath(browser)}emptynotepad.png`);

    browser
      .setValue('#area', "TPTLIVE TA-17E")
      .pause(1500)
      .end();
    },
};

