module.exports = function(chai, _) {
  var Test = require('./test');

  chai.chotokkyu = chai.chotokkyu || {};
  chai.chotokkyu.helper = function(setup, controller, action) {
    return new Test(setup, controller, action);
  };
  chai.chotokkyu.dynamicHelper = function(setup, controller, action) {
    return new Test(setup, controller, action, true);
  };
};
