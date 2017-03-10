import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  address: DS.attr(),
  price: DS.attr(),
  photo: DS.attr(),
  detail: DS.attr()
});
