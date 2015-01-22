'use strict';

angular.module('DashmoteApp.directives', [])
  .directive('responsiveInput', [ function() {
    return {
      restrict: 'E',
      replace: true,
      template: '<input />',
      link: function($scope, elm) {
        var getStringWidth = function(str, font) {
          var f = font || '12px arial',
          o = $('<div>' + str + '</div>')
            .css({'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden', 'font': f})
            .appendTo($('body')),
           w = o.width();

          o.remove();
          return w;
        };
        elm.keydown(function(/*e*/) {
          /*e.stopPropagation();*/
          console.log("key pressed");
          var chars = this.value.length;
          if(chars > 5) {
            $(this).css('width', getStringWidth(this.value, '25pt wf_SegoeUIBold'));
          }
          else {
            $(this).css('width', 100);
          }
        });
      }
    }
  }])
  .directive('changePage', [ '$timeout', '$location', function($timeout, $location) {
    return {
      restrict: 'E',
      template: '<div class="search" id="search-tab">search</div>',
      link: function($scope, elm) {
        console.log("div for change page: ");
        elm.mouseover(function(e) {
          e.stopPropagation();
          $timeout( function() {
            $location.path("/home");
          });
        });
      }
    }
  }]);
  