/* global describe, it, expect */

var plugin = require('..')
  , Test = require('../lib/test');

describe('plugin', function() {

  var chai = {};
  plugin(chai);

  it('should add chotokkyu helper to chai', function() {
    expect(chai.chotokkyu).to.be.an('object');
    expect(chai.chotokkyu.helper).to.be.a('function');
    expect(chai.chotokkyu.dynamicHelper).to.be.a('function');
  });

  describe('when helper is invoked', function() {
    var test = chai.chotokkyu.helper();

    it('should return test wrapper', function() {
      expect(test).to.be.an.instanceOf(Test);
    });
  });

  describe('when dynamicHelper is invoked', function() {
    var test = chai.chotokkyu.dynamicHelper();

    it('should return test wrapper', function() {
      expect(test).to.be.an.instanceOf(Test);
    });
  });

});
