var config = require('../../nightwatch.conf.js');

module.exports = { // adapted from: https://git.io/vodU0
  '@tags': ['ponyForum'],
  'pony login start': function(browser) {
    browser
      .url('https://mlpforums.com/')
      .pause(1000)
      .click('i[class="fa fa-navicon"]')
      .saveScreenshot(config.imgpath(browser) + 'pony01_OPENED_NAVIGATOR.png')
      .click('ul[class="ipsToolList ipsToolList_vertical"] li a')
      .pause(3000)
      .saveScreenshot(config.imgpath(browser) + 'pony02_OPENED_LOGIN.png')
      .setValue('input[name="username"]', 'RaincloudPony2005')
      .setValue('input[name="password"]', ['matsi7Salasoovi', browser.Keys.ENTER])
      .pause(3000)
      .saveScreenshot(config.imgpath(browser) + 'pony03_LOGGED_IN.png');
    
    //tee uus topic JEE
    browser
      .getLocationInView('a[class="ipsButton ipsButton_medium ipsButton_important ipsButton_fullWidth"]')
      .click('a[class="ipsButton ipsButton_medium ipsButton_important ipsButton_fullWidth"]')
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + 'pony04_NEW_POST.png')
      .click('span[class="ipsSelectTree_expand"]')
      .pause(3000)
      .saveScreenshot(config.imgpath(browser) + 'pony05_VIEW_ALL.png')
      .getLocationInView('div[data-id="92"]')
      .click('div[data-id="92"]')
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + 'pony06_SELECT_EQUESTRIA_GIRLS.png')
      .click('button[class="ipsButton ipsButton_primary"]')
      .pause(3000)
      .saveScreenshot(config.imgpath(browser) + 'pony07_FORUM_SELECTED.png')      
      .setValue('input[name="topic_title"]', "What if Celestia hadn't made Twilight her student")
      .setValue('div[class="cke_wysiwyg_div cke_reset cke_enable_context_menu cke_editable cke_editable_themed cke_contents_ltr"]', "In the lore, we know Twilight is a student of Celestia because she noticed Twilight's good potential. Where would Twilight be and what would be the friendship dynamic between other ponies aswell if this had never happened? Please share what you think!")
      .setValue('#elInput_topic_tags_dummyInput','theory, celestia, twilight')
      .pause(1000)
      .click('#elSelect_')
      .pause(1000)
      .click('option[value="Spoiler"]')
      .pause(1000)
      .getLocationInView('#check_topic_auto_follow_wrapper')
      .click('#check_topic_auto_follow_wrapper')
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + 'pony08_WRITTEN_POST.png')
      .getLocationInView('button[class="ipsButton ipsButton_medium ipsButton_primary"]')
      .click('button[class="ipsButton ipsButton_medium ipsButton_primary"]')
      .pause(3000)
      .saveScreenshot(config.imgpath(browser) + 'pony09_POST_DONE.png')
    /**/

    /*
    //otsi üles teema
    browser
      .waitForElement('#elSearchField')
      .pause(1000)
      .setValue('#elSearchField', ['You Just Got Kissed By the User Above You, Your Reaction?', browser.Keys.ENTER])
      .pause(3000)
      .saveScreenshot(config.imgpath(browser) + 'pony04_SEARCHED.png')
    /**/
  }
}