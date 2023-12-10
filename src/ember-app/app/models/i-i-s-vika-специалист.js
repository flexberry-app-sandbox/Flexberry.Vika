import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СпециалистMixin
} from '../mixins/regenerated/models/i-i-s-vika-специалист';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СпециалистMixin, Validations, {
});

defineProjections(Model);

export default Model;
