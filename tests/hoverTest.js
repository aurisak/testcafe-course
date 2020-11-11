fixture('Hover test')
.page('https://devexpress.github.io/testcafe/example/');

test('hover test', async t => {
  await t
    .setTestSpeed(0.1)
    .hover('input#populate');
});
