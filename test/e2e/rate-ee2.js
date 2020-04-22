const config = require("../../nightwatch.conf.js");

module.exports = {
/*
 * Open -> https://rate.ee/login
 * testi et lehe peal on facebook login nupp
 * click "Kirjakast" icon
 * check that error "Seda lehte näevad ainult registreeritud kasutajad." is visible
 * click registreerit
 * taida ara form
*/
  "Rate -> Fill form": function (browser) {
    browser
      .resizeWindow(1200, 800)
      .url("https://rate.ee/login")
      .waitForElementVisible("body", 2000)
      .assert.visible('button.btn.btn-facebook')
      .click('a.icn-messages')
      .waitForElementVisible("body", 500)
      .assert.containsText("body", "Seda lehte näevad ainult registreeritud kasutajad.")
      .saveScreenshot(`${config.imgpath(browser)}rate.png`)

      .useXpath()
      .click('//a[text()="Registreeri"]')

      .useCss()
      .waitForElementVisible("body", 500)
      .setValue("input[type=email]", "test_email")
      .setValue("input[type=password]", "test_password")
      .setValue("input[name='name']", "test_name")
      .setValue("select[name='bd_day']", "12")
      .setValue("select[name='bd_month']", "Detsember")
      .setValue("select[name='bd_year']", "1950")
      .click('a#fake-city')
      .waitForElementVisible('input#modal-city-name', 2000)
      .setValue('input#modal-city-name', "tallinn")

      .useXpath()
      .waitForElementVisible('//button[text()="Tallinn (Harju maakond)"]', 2000)
      .click('//button[text()="Tallinn (Harju maakond)"]')
      .pause(2000)
      .click('//*[@id="form-register"]/div[7]/label[1]')
      .saveScreenshot(`${config.imgpath(browser)}rate2.png`)
      .end();
  },
};
