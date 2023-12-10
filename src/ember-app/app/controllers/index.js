import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.vika.caption'),
          title: i18n.t('forms.application.sitemap.vika.title'),
          children: [{
            link: 'i-i-s-vika-специалист-l',
            caption: i18n.t('forms.application.sitemap.vika.i-i-s-vika-специалист-l.caption'),
            title: i18n.t('forms.application.sitemap.vika.i-i-s-vika-специалист-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-vika-анкеты-l',
            caption: i18n.t('forms.application.sitemap.vika.i-i-s-vika-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.vika.i-i-s-vika-анкеты-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-vika-причин-увольн-l',
            caption: i18n.t('forms.application.sitemap.vika.i-i-s-vika-причин-увольн-l.caption'),
            title: i18n.t('forms.application.sitemap.vika.i-i-s-vika-причин-увольн-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})