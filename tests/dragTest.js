import {Selector} from 'testcafe'

const triedCheckbox = Selector('#tried-test-cafe');
const slider = Selector('#slider');


fixture('drag test')
.page('https://devexpress.github.io/testcafe/example/');

test('drag test', async t => {
    await t
      .click(triedCheckbox)
      .drag(slider,360,0, {offsetX: 5, offsetY: 5});
});
