import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | submissions/new/policies', (hooks) => {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let route = this.owner.lookup('route:submissions/new/policies');
    assert.ok(route);
  });
});
