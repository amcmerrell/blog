import Ember from 'ember';

export default Ember.Helper.helper(function(params) {
  return (params[0].slice(0,150) + "...");
});