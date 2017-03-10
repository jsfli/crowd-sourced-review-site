import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
      addNewRestaurant(params) {
        var newRestaurant= this.store.createRecord('restaurant',params);
        newRestaurant.save();
        this.transitionTo('index');
      }
    }
});
