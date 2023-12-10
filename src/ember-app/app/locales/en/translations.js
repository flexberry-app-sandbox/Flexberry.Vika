import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISVikaАнкетыLForm from './forms/i-i-s-vika-анкеты-l';
import IISVikaПричинУвольнLForm from './forms/i-i-s-vika-причин-увольн-l';
import IISVikaСпециалистLForm from './forms/i-i-s-vika-специалист-l';
import IISVikaАнкетыEForm from './forms/i-i-s-vika-анкеты-e';
import IISVikaПричинУвольнEForm from './forms/i-i-s-vika-причин-увольн-e';
import IISVikaСпециалистEForm from './forms/i-i-s-vika-специалист-e';
import IISVikaАнкетыModel from './models/i-i-s-vika-анкеты';
import IISVikaПричинУвольнModel from './models/i-i-s-vika-причин-увольн';
import IISVikaРекомендацModel from './models/i-i-s-vika-рекомендац';
import IISVikaСпециалистModel from './models/i-i-s-vika-специалист';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-vika-анкеты': IISVikaАнкетыModel,
    'i-i-s-vika-причин-увольн': IISVikaПричинУвольнModel,
    'i-i-s-vika-рекомендац': IISVikaРекомендацModel,
    'i-i-s-vika-специалист': IISVikaСпециалистModel
  },

  'application-name': 'Vika',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Vika',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Vika',
          title: 'Vika'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        vika: {
          caption: 'Vika',
          title: 'Vika',
          'i-i-s-vika-специалист-l': {
            caption: 'Специалист',
            title: ''
          },
          'i-i-s-vika-анкеты-l': {
            caption: 'Анкеты',
            title: ''
          },
          'i-i-s-vika-причин-увольн-l': {
            caption: 'Причин увольн',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-vika-анкеты-l': IISVikaАнкетыLForm,
    'i-i-s-vika-причин-увольн-l': IISVikaПричинУвольнLForm,
    'i-i-s-vika-специалист-l': IISVikaСпециалистLForm,
    'i-i-s-vika-анкеты-e': IISVikaАнкетыEForm,
    'i-i-s-vika-причин-увольн-e': IISVikaПричинУвольнEForm,
    'i-i-s-vika-специалист-e': IISVikaСпециалистEForm
  },

});

export default translations;
