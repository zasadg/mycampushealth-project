// flip Cards
+ function($) {
    'use strict';
    function flipCard() {
        $('.js-flip').click(function(e) {
            e.preventDefault();
            $(this).closest('.js-card').addClass('hover');
        });
      
      $('.js-flipClose').click(function(e) {
            e.preventDefault();
            $(this).closest('.js-card').removeClass('hover');
        });
    }
    flipCard();
}(jQuery);

var app = angular.module('flipCardApp', []);

app.controller('cardCtrl',['$scope', function($scope){
  $scope.cupsValue = 2;
}]);