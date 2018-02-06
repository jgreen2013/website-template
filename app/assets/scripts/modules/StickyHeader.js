import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.siteHeader = $(".navbar");
    this.headerTriggerElement = $(".row2");
    this.createHeaderWaypoint();
    this.pageSections = $(".section");
    this.headerLinks = $(".navbar label");
    this.createPageSectionWaypoints();
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

  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each(function(){
      var currentPageSection = this;
      new Waypoint({
        element:currentPageSection,
        handler:function(){
          var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
          that.headerLinks.removeClass("is-current-link");
          $(matchingHeaderLink).addClass("is-current-link");
        },
        offset: '75%'
      });
    });
  }
}

export default StickyHeader;
