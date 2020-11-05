fixture('First fixture')
    .page('https://devexpress.github.io/testcafe/example/');

test('First test', async function (t) {
        await t
            .typeText('#developer-name','Jana')
            .click('#macos')
            .click('#submit-button');
    });
