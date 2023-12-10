import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Vika',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Vika',
          title: 'Vika'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
