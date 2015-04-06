var Benchmark = require('benchmark'),
    moment = require('./../moment.js'),
    base = new Date();

module.exports = {
  name: 'clone',
  onComplete: function(){console.log('done');},
  fn: function(){
      moment(base);
  },
  async: true
};
