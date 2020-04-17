// utils.js

module.exports = function ModuleExports(browser) {
  this.goToSite = function GotoSite() {
    browser
      .windowMaximize()
      .url('http://testing.site.com')
      .waitForElementVisible('body', 1000);
    return browser;
  };
  this.mainLogo = function MainLogo() {
    browser
      .click('body > nav > a');
    browser.assert.containsText('.style1>strong', 'Testing');
    return browser;
  };
  this.joinNow = function JoinNow() {
    browser
      .click('#join-now-button');
  };
  this.newTestUser = function NewTestUser() {
    browser
      .click('#first-name')
      .setValue('#first-name', 'test')
      .setValue('#last-name', 'automation')
      .setValue('#email', 'testautomation@example.com')
      .setValue('#password', 'testing1');
  };
  this.logout = function Logout() {
    browser
      .click('#customer_logout_link');
  };
  return this;
};
