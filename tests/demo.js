module.exports = {
    'Demo test Baidu': function (browser) {
        browser
            .url('https://www.baidu.com')
            .waitForElementVisible('body')
            .setValue('input[id=kw]', 'nightwatch')
            .waitForElementVisible('input[id=su]')
            .click('input[id=su]')
            .pause(1000)
            .assert.containsText('em', 'Nightwatch')
            .end();
    }
};