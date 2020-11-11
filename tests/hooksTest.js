import {Selector} from 'testcafe'

const submitButton = Selector('#submit-button')

fixture('First fixture')
    .page('https://devexpress.github.io/testcafe/testcafe/')
    .beforeEach(async t =>{
      await t
        .maximizeWindow()
        .setTestSpeed(0.1)
        .setPageLoadTimeout(0);
    })
    .afterEach(async t => {
      await t
        .click(submitButton)
    });


test
.page ('https://devexpress.github.io/testcafe/example/')
('First test', async function (t) {
    await t
        .typeText('#developer-name','Jana')
        .click('#macos');
});

test
.page ('https://devexpress.github.io/testcafe/example/')
('Second test', async function (t) {
    await t
        .typeText('#developer-name','Jana')
        .click('#windows');
});
