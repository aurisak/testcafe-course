import {Selector} from 'testcafe'

const developerName = Selector('#developer-name')
const macOs = Selector('#macos')
const submitButton = Selector('#submit-button')


fixture('First fixture')
    .page('https://devexpress.github.io/testcafe/example/');

test('First test', async function (t) {
        await t
            .expect(developerName.value).eql('')
            .typeText(developerName,'Jana')
            .expect(developerName.value).eql('Jana')
            .click(macOs)
            .click(submitButton);
    });
