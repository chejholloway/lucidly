
  var ProductService = (function ($http) {
      function ProductService($http) {
          var _this = this;

          this.getProducts = function () {
            return _this.$http.get("./api/products.json");
          };
          this.$http = $http;
      }
      return ProductService;
  }());

  ProductService.$inject = ['$http'];

angular
    .module('MyApp')
    .service('ProductService', ProductService);

