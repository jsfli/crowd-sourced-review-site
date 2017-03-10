import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNewRestaurant(){
      var params= {
        name: this.get('name'),
        address: this.get('address'),
        price: this.get('price'),
        photo: this.get('photo'),
        detail: this.get('detail'),
      };
      this.sendAction('addNewRestaurant',params);
  }
}
});
