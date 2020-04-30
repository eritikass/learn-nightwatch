const config = require("../../nightwatch.conf.js");

module.exports = {
  "Test for auto24": function (browser) {
    browser
    .setWindowSize(1200, 1200)
    .url("https://www.auto24.ee/kasutatud/kasutatud.php")
    .waitForElementVisible("body");

  browser.moveToElement('#searchParam-show_pictures', 0, 0).pause(3500);

  browser.elements(
    "css selector",
    "#searchParam-show_pictures:not(:checked)",
    (result) => {
      if (result.value.length === 1) {
        browser.click("#searchParam-show_pictures:not(:checked)");
      }
    },
  );

  browser.pause(3000).end();
},
};