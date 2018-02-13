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

import MobileMenu from './modules/Menu';
import Menu from './modules/Menu';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
var menu = new Menu();
var stickyHeader = new StickyHeader();
