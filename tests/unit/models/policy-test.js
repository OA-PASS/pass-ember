import { moduleForModel, test } from 'ember-qunit';

moduleForModel('policy', 'Unit | Model | policy', {
  // Specify the other units that are required for this test.
  needs: ['model:repository']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
