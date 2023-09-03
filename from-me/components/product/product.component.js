var Product = {
  templateUrl: './components/product/product-component.tpl.html',
  controller: 'MainController'
};

angular
  .module('MyApp')
  .component('Product', Product);