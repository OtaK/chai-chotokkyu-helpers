/* global describe, it, expect */

var chotokkyu = require('..');

describe('chai-chotokkyu-function', function() {

  it('should export function', function() {
    expect(chotokkyu).to.be.an('function');
  });

});
