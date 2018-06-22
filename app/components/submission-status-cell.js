import Component from '@ember/component';

export default Component.extend({
  // For specs: https://github.com/OA-PASS/pass-ember/issues/568
  status: Ember.computed('record', function () {
    const submission = this.get('record');
    const repoCopies = this.get('column.repoCopiesMap')[submission.get('id')];
    const deposits = this.get('column.depositsMap')[submission.get('id')];

    if (repoCopies.any(rc => rc.get('copyStatus') == 'stalled')) {
        return 'Stalled';
    }

    if (submission.get('source') == 'other' && !submission.get('submitted')) {
        return 'Manuscript expected';
    }

    if (repoCopies.get('length') < deposits.get('length')) {
      if (submission.get('source') == 'pass') {
        return 'Submitted';
      }
    }

    if (repoCopies.get('length') > 0 && repoCopies.get('length') == deposits.get('length')) {
      if (repoCopies.every(rc => rc.get('copyStatus') == 'complete')) {
        return 'Complete';
      }
    }

    return 'See details';
  })
});
