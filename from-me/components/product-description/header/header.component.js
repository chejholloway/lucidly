var HeaderComponent = {
  bindings: {
    imgSrc: '=',
    headerName: '>',
    headerBrand: '='
  },
  templateUrl: './components/product-description/header/header-component.tpl.html',
  controller: 'MainController'
};

angular
  .module('common')
  .component('HeaderComponent', HeaderComponent);