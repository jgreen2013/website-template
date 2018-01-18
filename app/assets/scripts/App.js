var Person = require('./modules/Person');

window.onload = function() {
  var jason = new Person("Jason Greenstreet", "blue");
  jason.greet();

};
