var ItemService = (function ($http) {
    function ItemService($http) {
        var _this = this;
            _this.$http = $http;

        this.getItems= function () {
          return $http.get("./api/items.json");
        };

    }
    return ItemService;
}());

ItemService.$inject = ['$http'];

angular
  .module('MyApp')
  .service('ItemService', ItemService);