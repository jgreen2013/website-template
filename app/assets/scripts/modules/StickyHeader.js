import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.siteHeader = $(".navbar");
    this.headerTriggerElement = $(".row2");
    this.createHeaderWaypoint();
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
