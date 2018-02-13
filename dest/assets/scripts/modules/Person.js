/*   This is the older JS way of creating an Object
function Person(fullName, favColor) {
  this.name = fullName;
  this.favoriteColor = favColor;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name} and my favorite color is ${this.favoriteColor}`);
  }
}
*/

/* This is the new ES6 way of creating a Class */
class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }

  greet() {
    console.log(`Hi there, my name is ${this.name} and my favorite color is ${this.favoriteColor}`);
  }
}

/* This is the old node way of exporting
module.exports = Person;
*/
export default Person;
