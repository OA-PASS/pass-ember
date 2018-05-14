import { moduleForComponent, test, setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module } from 'qunit';
import { startMirage } from 'pass-ember/initializers/ember-cli-mirage';
import { render } from '@ember/test-helpers';


module('Integration | Component | workflow repositories', (hooks) => {
  setupRenderingTest(hooks);
  let server = startMirage();
  test('it renders', function (assert) {
    let model = {};

    // TODO: add actual tests here
    model.newSubmission = Ember.Object.create({
      repositories: [
      ],
      grants: [
        Ember.Object.create({
          primaryFunder: Ember.Object.create({

          })
        }),

      ]
    });
    model.repositories = [];

    this.set('model', model);
    render(hbs`{{workflow-repositories model=model}}`);
    assert.ok(true);
  });
  server.shutdown();
});