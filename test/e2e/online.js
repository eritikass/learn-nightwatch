var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['telia'],
  'Open telia': function(browser) {
    // load telia
    browser
      .url('https://sso.telia.ee/sso2/cdcservlet?RequestID=1b31de6ee9421ba36ac98c2bd13ab5474f2b0644&IssueInstant=2018-05-03T23%3A25%3A43%2B03%3A00&MajorVersion=1&MinorVersion=0&ProviderID=https%3A%2F%2Fwww.online.ee%3A443%2F%3FRealm%3D%2F&RelayState=02704288da623b8792d2d945c660979b4e58e33f&goto=https%3A%2F%2Fwww.online.ee%2FinitSSO.php&loginURI=login_suhtlus.jsp&mpPrefix=https%3A%2F%2Fwww.online.ee%2F&lang=1')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + 'telia.png');
    //npm run test "Folder Path(test/e2e/'name')"
    // click
    browser
        .pause(1000)
        .setValue('#email', 'proov9999@online.ee')
        .pause(1000)
        .setValue('[type="password"]','Testcase1')
        .pause(1000)
        .click('#login')
        .pause(1000)
        .end();

  }
}