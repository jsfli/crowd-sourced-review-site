import Ember from 'ember';

export function restaurantHot(params) {
  var restaurant = params[0];

  if(restaurant.get('reviews').get('length')>=1) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-heart-empty"></span>');
  }
}

export default Ember.Helper.helper(restaurantHot);
