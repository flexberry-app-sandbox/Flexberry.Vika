import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-vika-анкеты-l');
  this.route('i-i-s-vika-анкеты-e',
  { path: 'i-i-s-vika-анкеты-e/:id' });
  this.route('i-i-s-vika-анкеты-e.new',
  { path: 'i-i-s-vika-анкеты-e/new' });
  this.route('i-i-s-vika-причин-увольн-l');
  this.route('i-i-s-vika-причин-увольн-e',
  { path: 'i-i-s-vika-причин-увольн-e/:id' });
  this.route('i-i-s-vika-причин-увольн-e.new',
  { path: 'i-i-s-vika-причин-увольн-e/new' });
  this.route('i-i-s-vika-специалист-l');
  this.route('i-i-s-vika-специалист-e',
  { path: 'i-i-s-vika-специалист-e/:id' });
  this.route('i-i-s-vika-специалист-e.new',
  { path: 'i-i-s-vika-специалист-e/new' });
});

export default Router;
