import {Selector} from 'testcafe'

const submitButton = Selector('#submit-button');

fixture('Set page timeout test')
.page('https://devexpress.github.io/testcafe/');

test('set page timeout test', async t => {
    await t
    .setTestSpeed(0.5)
    .setPageLoadTimeout(1)
    .navigateTo ('https://devexpress.github.io/testcafe/example/')
    .click(submitButton);
});
