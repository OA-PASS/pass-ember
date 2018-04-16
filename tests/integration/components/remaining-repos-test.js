import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('remaining-repos', 'Integration | Component | remaining repos', {
  integration: true
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{remaining-repos}}`);

  assert.ok(this.$());

  // Template block usage:
  this.render(hbs`
    {{#remaining-repos}}
      template block text
    {{/remaining-repos}}
  `);

  assert.ok(this.$());
});
