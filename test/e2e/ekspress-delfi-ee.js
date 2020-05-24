const conf = require("../../nightwatch.conf.js");

module.exports = {
    tags: 'ekspress',
    "Testing ekspress.delfi.ee...": function (browser) {
        browser
            .maximizeWindow()
            .url("https://ekspress.delfi.ee/")
            .waitForElementVisible("body")
            .useXpath()
            .click(
            '//li[@class="navigation-top__item navigation-top__item--areen"]/a[text()="Areen"]'
            )
            .waitForElementVisible(
            '//li[@class="header__navigation-bottom__item"]/a[text()="Kirjandus"]'
            )
            .click(
            '//li[@class="header__navigation-bottom__item"]/a[text()="Kirjandus"]'
            )
            .waitForElementVisible("//body");
    
        // move to 2nd page
        browser
            .waitForElementVisible(
            '(//div[@class="pager-wrapper"]//*[text()="›"])[1]'
            )
            .click('(//div[@class="pager-wrapper"]//*[text()="›"])[1]')
            .waitForElementVisible(
            "//div[@class='pager-wrapper']//a[@class='pager__button' and contains(text(),'3')]"
            )
            .assert.urlContains("teema/kirjandus?page=2");
    
        // move to 3rd page
        browser
            .waitForElementVisible(
            '(//div[@class="pager-wrapper"]//*[text()="›"])[1]'
            )
            .click('(//div[@class="pager-wrapper"]//*[text()="›"])[1]')
            .waitForElementVisible(
            "//div[@class='pager-wrapper']//a[@class='pager__button' and contains(text(),'4')]"
            )
            .assert.urlContains("teema/kirjandus?page=3");
    
        // move to the end of articles list
        browser
            .waitForElementVisible("(//span[text()='Loe edasi'])[last()]")
            .moveToElement("(//span[text()='Loe edasi'])[last()]", 0, 0)
            .pause(2000)
            .saveScreenshot(`${conf.imgpath(browser)}ekspress-last3.png`);
    
        // click to last article
        browser
            .click("(//span[text()='Loe edasi'])[last()]")
            .waitForElementVisible('//a[@class="article__listen"]')
            .assert.containsText('//a[@class="article__listen"]', "KUULA")
            .saveScreenshot(`${conf.imgpath(browser)}ekspress-article-open.png`);
    
        browser.pause(3000).end();
    },
};

// module.exports = {
//     tags: 'ekspress',
//     "Testing ekspress.delfi.ee...": function (browser) {
//         browser
//             .maximizeWindow()
//             .url("https://ekspress.delfi.ee/")
//             .waitForElementVisible("body", 2000)
//             .useXpath()
//                 .click("//a[@href='areen']")
//                 .click("//a[@href='/teema/kirjandus']")
//             .useCss()
//                 .waitForElementVisible("body", 2000)             
//             .useXpath()
//                 .click("//a[contains(concat(' ', @class, ' '), ' pager__button--next ')]")
//             .useCss()
//                 .waitForElementVisible("body", 6000)
//             .useXpath()
//                 .click("//a[contains(concat(' ', @class, ' '), ' pager__button--next ')]")
//             .useCss()
//                 .waitForElementVisible("body", 4000)
//                 .moveTo(null, 0, 15000)
                
//             .useXpath() 
//                 .click("//a[@href='/areen/hollywoodi-filmistaari-tom-hanksi-uus-juturaamat-mitte-film?id=82588725']")
//             .useCss()
//                 .waitForElementVisible("body", 4000) 
//             //.useXpath()     
//                // .assert.containsText("//a[@href='#']", 'Kuula')      
//             .end()
            
//         }
//     }