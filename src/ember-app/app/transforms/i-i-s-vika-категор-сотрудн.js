import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КатегорСотруднEnum from '../enums/i-i-s-vika-категор-сотрудн';

export default FlexberryEnum.extend({
  enum: КатегорСотруднEnum,
  sourceType: 'IIS.Vika.КатегорСотрудн'
});
