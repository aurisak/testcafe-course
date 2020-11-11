import {Selector, ClientFunction} from 'testcafe'

const developerName = Selector('#developer-name')
const macOs = Selector('#macos')
const submitButton = Selector('#submit-button')

const getPageURL = ClientFunction(() => window.location.href);


fixture('Client Function')
    .page('https://devexpress.github.io/testcafe/example/');

test('Client Function Test', async function (t) {
        await t
            .typeText(developerName,'Jana')
            .click(macOs)
            .click(submitButton)
            .expect(getPageURL()).contains('thank-you');
    });
