import $ from 'jquery';

class Menu {
  constructor(){
    this.MenuButton1 = $("#MenuButton1");
    this.MenuButton2 = $("#MenuButton2");
    this.MenuButton3 = $("#MenuButton3");

    this.events();
  }

  events() {
    this.MenuButton1.click(this.toggleTheButton.bind(this));
    this.MenuButton2.click(this.toggleTheButton.bind(this));
    this.MenuButton3.click(this.toggleTheButton.bind(this));
  }

  toggleTheButton() {
    if (this.MenuButton1.hasClass("active")){
      this.MenuButton1.toggleClass("btn-outline-secondary");
    } else {
      this.MenuButton1.toggleClass("active btn-outline-success");
    }
  }

}

export default Menu;
