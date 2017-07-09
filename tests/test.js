module.exports = {

    'Google Drive test' : function (browser) {
        browser
            .url('https://abba22.atlassian.net/wiki/display/')
            .waitForElementVisible('body', 1000)
            .setValue('input#username', 'sforce.rkt54@gmail.com')
            .click('button#login-submit')
            .waitForElementVisible('input#password', 1000)
            .setValue('input#password', 'testuser')
            .click('button#login-submit')
            .waitForElementVisible('body', 5000)
            .pause(6000)
            .click('#quick-create-page-button')
            .waitForElementVisible('body', 3000)
            .setValue('input#content-title', 'testdraft3232')
            .click('body')
            .pause(3000)
            .click('#rte-button-insert')
            .click('#google-drive-connector')
            .pause(4000)
            // .window_handles((res)=> {
            //         console.log(res);
            //         var handle = res.value[0];
            // browser.switchWindow(handle);
            // })
            .frame(1, (res)=>{console.log("switched to frame")})

            .pause(3000)
            .assert.elementPresent('div#editor')
            .click('#launch-picker')
            .pause(5000)
            .window_handles((res)=> {
                    var handle = res.value[1];
                    console.log(res);
                browser.switchWindow(handle);
                browser.assert.elementPresent('div#view_container');
                browser.setValue('input#identifierId', 'sforce.rkt54@gmail.com');
                browser.keys(browser.Keys.ENTER);
                browser.pause(2000);
            })

            .pause(4000)

            // .click('button#login-submit')
            // .setValue('input#password', 'drK37sjFZh7')

            .frame(1)

            // .assert.containsText('#main', 'Night Watch')
            .end();
    }
};

