import Ember from 'ember';

export default class extends Ember.Service {
  foo = 'foo'

  init() {
    super.init();

    if (this.get('foo') != 'foo') {
      throw('error');
    }
  }

}
