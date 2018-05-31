var config = require('../../nightwatch.conf.js');

// run this test using
// npm run test -- -t test/e2e/jussmartson.js

// task: find a site and log in, make some screenshots

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['Pistik'],
  'Pistik master2007': function(browser) {
    // load pistik
    browser
      .url('https://www.pistik.net/')
      .pause(1000)
      .waitForElementVisible('body')
      //close ad
      .click('#show_login')
      .pause(1000)
      .url('https://www.pistik.net/')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + 'Pistikscreen.png')
      //close ad
      //login path
      .click('#show_login')
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + 'PistikLogin.png')
      //fill username
      .setValue('#username', 'AgeGamer2007')
      //.pause(1000)
      .saveScreenshot(config.imgpath(browser) + 'PistikKasutajanimi.png')
      //.pause(1000)
      //fill password and press enter
      .setValue('#password', ['Parools0na', browser.Keys.ENTER])
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + 'PistikPassword.png')
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + 'Loggedin.png')
      //click 'games'      
      .click('#games')
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + 'gamesxd.png')
      .pause(1000)
      //go on comment thingy
      //.url('http://www.pistik.net/games/index.php?leht=koodid&mang=1409&kom=lisa#add_comment')
      //get input "lisa kommentaar"  logation
      //.getLocationInView('input[value="Lisa kommentaar"]')
      //.pause(1000)
      //write comment
      //.setValue('#kommentaar', 'ay lomeo')
      //.pause(1000)
      //.saveScreenshot(config.imgpath(browser) + 'spam.png')
      //use input 'lisa kommentaar'
      //.click('input[value="Postita"]')
    
    browser
        .pause(1000)
        .end();

  }
}