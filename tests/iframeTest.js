import {Selector} from 'testcafe'

const iframeName = Selector('iframe#mce_0_ifr')
const textArea = Selector('body#tinymce.mce-content-body')

fixture('Iframe Fixture')
.page('http://the-internet.herokuapp.com/iframe');

test('iframe test', async t => {
    await t
      .switchToIframe(iframeName)
      .click(textArea)
      .pressKey('ctrl+a delete')
      .typeText(textArea,'Hello Jana')
      .expect(textArea.innerText).contains('Jana')
      .switchToMainWindow();
});
