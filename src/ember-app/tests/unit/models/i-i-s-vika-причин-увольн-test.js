import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-vika-причин-увольн', 'Unit | Model | i-i-s-vika-причин-увольн', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-vika-анкеты',
    'model:i-i-s-vika-причин-увольн',
    'model:i-i-s-vika-рекомендац',
    'model:i-i-s-vika-специалист',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
