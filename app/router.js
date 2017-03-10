import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('addrestaurant');
  this.route('restaurantdetail',{path: '/restaurantdetail/:restaurant_id'});
});

export default Router;
