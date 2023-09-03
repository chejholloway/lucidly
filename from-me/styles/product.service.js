(() => {
   'use strict';
   
   import { module } from 'angular';
  
   class ProductService {
     static $inject = ['$http'];
     constructor($http: $http) {
       this.$http = $http;
     }
     
	  getProducts = () => this.$http.get("./api/products.json");
    }
  }

  angular
   .module('productManager')
   .service('ProductService', ProductService);
}());