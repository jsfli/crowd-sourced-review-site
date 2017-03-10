import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr(),
  rating: DS.attr(),
  author: DS.attr(),
  restaurant: DS.belongsTo('restaurant',{async:true}),
});
