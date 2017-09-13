import Ember from 'ember';

export default Ember.Service.extend({
  foo: 'foo',

  init() {
    this._super(...arguments);

    if (this.get('foo') != 'foo') {
      throw('error');
    }

  }

});
