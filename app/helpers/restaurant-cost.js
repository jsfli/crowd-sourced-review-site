import Ember from 'ember';

export function restaurantCost(params) {
  var restaurantCost = params[0].get('price');

  if(restaurantCost >= 200) {
    return '$$$$';
  } else if (restaurantCost >= 100) {
    return '$$';
  } else if (restaurantCost <= 99) {
    return '$';
  }
}

export default Ember.Helper.helper(restaurantCost);
