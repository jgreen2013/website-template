import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from '../../../../node_modules/jquery-smooth-scroll/jquery.smooth-scroll';

class StickyHeader {
  constructor() {
    this.siteHeader = $(".navbar");
    this.headerTriggerElement = $(".row3");
    this.createHeaderWaypoint();
    this.pageSections = $(".section");
    //this.headerLinks = $(".navbar label");
    var temp = [];
    $(".navbar label").each(function(){
      temp.push(this.childNodes[1].id);
    });
    this.headerLinks = temp;
    //console.log(temp);
    //this.addSmoothScrolling();
  }

  addSmoothScrolling(){
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint(){
    var that = this;
    new Waypoint({
      element: that.headerTriggerElement[0],
      handler: function(direction){
        if (direction == "down") {
          that.siteHeader.addClass('navbar-light navbar--opaque').removeClass('navbar-dark bg-dark');
        } else {
          that.siteHeader.addClass('navbar-dark bg-dark').removeClass('navbar-light navbar--opaque');
        }
      }
    });
  }


}

export default StickyHeader;
