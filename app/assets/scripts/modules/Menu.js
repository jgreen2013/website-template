import $ from 'jquery';

class Menu {

  constructor(){
    /* Virtualize the DOM elements */
    this.currentSelection = "Button1";
    this.MenuButton1Label = $("#MenuButton1Label");
    this.MenuButton1 = $("#MenuButton1");
    this.MenuButton2Label = $("#MenuButton2Label");
    this.MenuButton2 = $("#MenuButton2");
    this.MenuButton3Label = $("#MenuButton3Label");
    this.MenuButton3 = $("#MenuButton3");

    this.events();
  }

  events() {
    this.MenuButton1.click(this.toggleButton1.bind(this));
    this.MenuButton2.click(this.toggleButton2.bind(this));
    this.MenuButton3.click(this.toggleButton3.bind(this));
  }

  toggleButton1() {
    this.MenuButton1Label.removeClass("btn-outline-secondary").addClass("active btn-outline-success");
    this.MenuButton2Label.removeClass("active btn-outline-success").addClass("btn-outline-secondary");
    this.MenuButton3Label.removeClass("active btn-outline-success").addClass("btn-outline-secondary");
    this.exit();
  }

  toggleButton2() {
    this.MenuButton1Label.removeClass("active btn-outline-success").addClass("btn-outline-secondary");
    this.MenuButton2Label.removeClass("btn-outline-secondary").addClass("active btn-outline-success");
    this.MenuButton3Label.removeClass("active btn-outline-success").addClass("btn-outline-secondary");
    this.exit();
  }

  toggleButton3() {
      this.MenuButton1Label.removeClass("active btn-outline-success").addClass("btn-outline-secondary");
      this.MenuButton2Label.removeClass("active btn-outline-success").addClass("btn-outline-secondary");
      this.MenuButton3Label.removeClass("btn-outline-secondary").addClass("active btn-outline-success");
      this.exit();
  }

  exit() {

  }

}

export default Menu;
