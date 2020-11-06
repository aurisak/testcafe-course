import {Selector, t} from 'testcafe'

const fileUpload = Selector('input#file-upload');
const fileUploadButton = Selector('input#file-submit.button');

fixture('File upload fixture')
.page('http://the-internet.herokuapp.com/upload');

test('file upload test', async t => {
    await t
      .setFilesToUpload(fileUpload, '../../upload/one.jpeg')
      .clearUpload(fileUpload)
      .setFilesToUpload(fileUpload, '../../upload/two.png')
      .click(fileUploadButton);
});
