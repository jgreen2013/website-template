/* This is the old node way of importing
var Person = require('./modules/Person');
*/

/*
import Person from './modules/Person';
window.onload = function() {
  var jason = new Person("Jason Greenstreet", "red");
  jason.greet();
};
*/

import Menu from './modules/Menu';

var menu = new Menu();
