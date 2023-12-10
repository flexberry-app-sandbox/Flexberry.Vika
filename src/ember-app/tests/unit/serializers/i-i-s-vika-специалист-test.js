import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-vika-специалист', 'Unit | Serializer | i-i-s-vika-специалист', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-vika-специалист',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-vika-возраст',
    'transform:i-i-s-vika-категор-сотрудн',
    'transform:i-i-s-vika-стаж',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
