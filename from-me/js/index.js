var app = angular.module("MyApp", []);

app.controller("PaginationCtrl", function($scope, ItemService) {
  ItemService.getItems()
    .then(function(list){
          $scope.itemsList = list.data;
          console.log($scope.itemsList);
    });
});