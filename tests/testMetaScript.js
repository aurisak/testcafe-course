fixture.meta('version','1')('First fixture')
    .page('https://devexpress.github.io/testcafe/testcafe/');

test.meta('env','production')
.page ('https://devexpress.github.io/testcafe/example/')
('First test', async function (t) {
    await t
        .typeText('#developer-name','Jana')
        .click('#macos')
        .click('#submit-button');
});

test
.page ('https://devexpress.github.io/testcafe/example/')
('Second test', async function (t) {
    await t
        .typeText('#developer-name','Jana')
        .click('#macos')
        .click('#submit-button');
});
