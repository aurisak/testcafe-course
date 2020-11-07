fixture('Speed Test fixture')
    .page('https://devexpress.github.io/testcafe/example/');

test('Set test speed test', async function (t) {
        await t
            .setTestSpeed(0.01)
            .typeText('#developer-name','Jana')
            .click('#macos')
            .click('#submit-button');
    });
