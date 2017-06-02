import Ember from 'ember';

let i = 0;

export default Ember.Controller.extend({

  init() {
    this._super(...arguments);
    Ember.run.later(this, () => {
      this._testLog();
    }, 350);
  },

  _testLog() {
    console.log("Test "+ ++i);
    Ember.run.later(this, () => {
      this._testLog();
    }, 350);
  }
});
