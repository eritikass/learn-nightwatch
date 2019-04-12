const config = require('../../nightwatch.conf.js');

module.exports = { 
  'Tpilet popular route': function (browser) {
    browser
      .url('https://www.tpilet.ee/')
      .waitForElementVisible('body')
      .pause(5000)
      .assert.title('Piletid sinu teekonnale')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}PageLoaded.png`)

      .click('#web-home-popular-17028-17058')
      .pause(2000)
      .saveScreenshot(`${config.imgpath(browser)}SelectPopular.png`)

      .click('#web-components-journeyitemaction-tickets > div._1SLgSGpKzm3JFfg7QNnzZF.bEcEJjvsDLaaE_gRmqBVL')
      .pause(5000)
      .saveScreenshot(`${config.imgpath(browser)}.SelectTrip.png`)
      .pause(1000)

      .click('#ticket-panel-scroll-container > div.wrapper-1 > div > div > div._2YIdyWWrax1dyo2yxrhSR > div:nth-child(1) > div > div.smqNihv50-Xe41CKj33Fa > div._1eRN_YFmoRp1QcsiSupipC > div > div._3mbZTemfn3cnxwKkLHZs-m._3JctL7S83WaRKzmWtX0O-T._3S1fH0bVn-dX2D5_SCaO63.false.false')
      .pause(3000)
      .saveScreenshot(`${config.imgpath(browser)}.FullTicketPlussOne.png`)

      
      //.click('#web-scrollwrapper-next > div')
      .click('#web-basketoverview-desktop > div > div._31iQs6O6NgmnPcn4BDby4K')

      .pause(3000)
      .saveScreenshot(`${config.imgpath(browser)}.Next.png`)

      

      .end();      
  },
};