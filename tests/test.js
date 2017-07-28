module.exports = {

    'Google Drive test' : function (browser) {
        browser
            .url('https://abba22.atlassian.net/wiki/display/')
            .waitForElementVisible('body', 1000)
            .setValue('input#username', 'sforce.rkt54@gmail.com')
            .click('#login-submit')
            .waitForElementVisible('input#password', 2000)
            .setValue('input#password', 'testuser')
            .click('button#login-submit')
            .waitForElementVisible('body', 7000)
            .waitForElementVisible('#quick-create-page-button', 15000)
            .pause(5000)
            .click('#quick-create-page-button')
            .waitForElementVisible('body', 3000)
            .setValue('input#content-title', Math.random().toString(10).slice(2))
            .click('body')
            .pause(3000)
            .click('#rte-button-insert')
            .click('#google-drive-connector')
            .pause(4000)
            .frame(1, (res)=>{console.log("switched to frame")})
            .pause(3000)
            .assert.elementPresent('div#editor')
            .click('#launch-picker')
            .pause(5000)
            .window_handles((res)=> {
                var handle = res.value[1];
                browser.switchWindow(handle)
                .pause(2000)
                .verify.elementPresent('div#view_container')
                .setValue('input#identifierId', 'sforce.rkt54@gmail.com')
                .sendKeys('input#identifierId', browser.Keys.ENTER)
                .pause(6000)
                .assert.elementPresent('div#password')
                .setValue('input[name=password]', 'drK37sjFZh7')
                .sendKeys('input[name=password]', browser.Keys.ENTER)
                .pause(6000);
                })
            .pause(2000)
            .window_handles((res)=> {
                var handle = res.value[0];
                browser.switchWindow(handle);
                })
            .verify.elementPresent('div#editor')

            .verify.elementPresent('.picker-frame.picker-dialog-frame')
            .pause(8000)
            .elementActive().frame(2).frame(1)
            .pause(2000)
            .verify.elementPresent("div[data-target=doc]")
            .click('div[data-target=doc]')
            .pause(3000)
            .verify.elementPresent("div[id^=\"picker:ap:0\"]")
            .click("div[id^=\"picker:ap:0\"]")
            .pause(4000)
            .frame(null)
            .pause(1000)
            .click('#ap-button-0')
            .pause(6000)
            .click('#rte-button-publish')
            .pause(10000)
            .end();
    }
};

