import Ember from 'ember';
import layout from '../templates/components/console-display';

export default Ember.Component.extend({
  layout,
  
  console: Ember.inject.service(),

  logs: Ember.computed.alias('console.logs')
});
