import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contributor', 'Unit | Model | contributor', {
  // Specify the other units that are required for this test.
  needs: ['model:publication', 'model:user']
});

test('it exists', function (assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
