const config = require("../../nightwatch.conf.js");

module.exports = {
  "Rate -> Tests and fill form": function (browser) {
    browser //unfinished!
      .url("https://rate.ee/login")
      .waitForElementVisible("body", 500)
      .assert.visible('button.btn-facebook')
      .click('a.icn-messages')
      .waitForElementVisible("body", 500)
      .assert.containsText("body", "Seda lehte näevad ainult registreeritud kasutajad.")
      .click('a[class="nav-link"]') // 'a.nav-link' doesnt work (other object classes start with 'nav-link')
      .waitForElementVisible("body", 500)
      .assert.visible("input[type=email]")
      .setValue("input[type=email]", "test_email")
      .setValue("input[type=password]", "test_password")
      //.setValue("input[id=city-name]", "Tallinn (Harju maakond)") which action for list?
      .setValue("input[name='name']", "test_name")
      .setValue("select[name='bd_month']", "1") //doesnt work?
      .setValue("select[name='bd_year']", "1950")
      //.click("input[class='magic-radio', id='11']") which action for radiobutton?
      .saveScreenshot(`${config.imgpath(browser)}rate.png`)
      .end();
  },
};