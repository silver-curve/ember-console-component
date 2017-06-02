import Ember from 'ember';

export default Ember.Service.extend({

  logs: null,
  maxLength: 50,

  init() {
    this._super();
    this.set('logs', Ember.A());

    this._oldConsoleLog = console.log;

    console.log = line => { this._log(line) };
  },

  _log(line) {
      let logs = this.get('logs')
      logs.pushObject(line);
      const maxLength = this.get('maxLength');
      const logLength = logs.length;
      if (logLength > maxLength)
      {
        logs = logs.slice(logLength - maxLength, logLength);
        this.set('logs', Ember.A(logs));
      }

      // call the original console function
      this._oldConsoleLog(line);
  },

  willDestroy() {
    console.log = this._oldConsoleLog;
    this._super(...arguments);
  }

});
