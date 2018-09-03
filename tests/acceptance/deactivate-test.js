import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | deactivate', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /deactivate', async function(assert) {
    await visit('/first-route/second-route');
    assert.equal(currentURL(), '/first-route/second-route'); 
  });
});
