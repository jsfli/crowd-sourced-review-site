import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    showReviewForm(){
      this.set('addNewReview',true);
    },
    saveReview(){
      var params = {
        author: this.get('author'),
        comment: this.get('comment'),
        rating: parseInt(this.get('rating')),
        restaurant: this.get('restaurant')
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview',params);
    }
  }
});
