const config = require('../../nightwatch.conf.js');

module.exports = { 
  '@tags': ['piletilevi'],
  'Open piletilevi': function (browser) {    
    browser
      .url('https://www.piletilevi.ee')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}piletilevi.png`); 
                     
      browser        
      .click('a[href="https://www.piletilevi.ee/est/piletid/teater/"]')
      .saveScreenshot(`${config.imgpath(browser)}piletilevi2.png`)             
      .end();      
  },
};
