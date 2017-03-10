import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('restaurant', params.restaurant_id);
  },

  sortBy: ['rating:desc'],
  sortedReviews: Ember.computed.sort('model.reviews', 'sortBy'),

  actions: {
    saveReview(params) {
      var newReview = this.store.createRecord('review',params);
      var restaurant = params.restaurant;
      restaurant.get('reviews').addObject(newReview);
      newReview.save().then(function(){
        return restaurant.save();
      });
    }
  },
  setupController(controller,model){
    this._super(controller,model);
    controller.set('sortedReviews',this.get('sortedReviews'));
    controller.set('sortBy',this.get('sortBy'));
  }
});
