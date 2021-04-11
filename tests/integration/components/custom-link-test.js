import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | custom-link', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <CustomLink @route="example">
        Link to example
      </CustomLink>
    `);

    assert.equal(
      this.element.querySelector('a').getAttribute('href'),
      '/example'
    );
  });
});
