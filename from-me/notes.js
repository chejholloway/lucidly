<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Ludic Works Code Challenge | Che' J. Holloway</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
  <link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css'>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" >



</head>

<body>
  <body ng-app="MyApp">
  <div ng-controller="PaginationCtrl">
    <div class="row">
      <div class="box col-xs-12 col-sm-3 col-md-3 col-lg-3">
          <ul ng-repeat="item in items | offset: currentPage*itemsPerPage | limitTo: itemsPerPage">
            <li>
              <img ng-src="{{item.product.image.link.src}}"
                  alt="{{item.product.image.link.title}}"
                  title ="{{item.product.image.link.title}}"
                  width= "{{item.product.image.link.width}}"
                  height="{{item.product.image.link.height}}"><br>

              <div class="ratings-stars text-center" style="display: inline; padding-top: 7px;">
                <i class="fa fa-star fa-2x" style="color: gray"></i>
                <i class="fa fa-star fa-2x" style="color: gray"></i>
                <i class="fa fa-star fa-2x" style="color: gray"></i>
                <i class="fa fa-star fa-2x" style="color: gray"></i>
                <i class="fa fa-star fa-2x" style="color: gray"></i>
              </div><br>
              <a href="#" style="margin-top: 15px;" class="btn btn-default btn-lg active" role="button">Add To Compare</a>
            </li>
            <li>
              <a ng-href="{{item.product.description.header.link.url}}">
                <h4>{{item.product.description.header.link.name}}<h4>
                <h5>{{item.product.description.header.link.brand}}<h5>
              </a>
              <span>{{item.product.description.manufacturer.text}} #{{item.product.description.sku.id}}<span>
                <i class="fa fa-circle" style="font-size: 9px;"></i>
              <span>MFR# {{item.product.description.manufactuer.number}}<span><hr>
              <h5>TOP HIGHLIGHTS</h5>
              <ul ng-repeat="highlight in item.product.description.highlight.sellingPoints.listitem">
                <li>{{highlight}}</li>
              </ul><hr>
              <div style="display: inline;">
                <section style="float: left; width: 50%; height: 50px; border-right: 3px gray solid;">
                  <h5>{{item.product.description.additionalInfo.comments.availability}} : {{item.product.description.additionalInfo.comments.inStock}}</h5>
                </section>
                <section style=" float: right; width: 50%; height: 50px; padding-left: 25px;">
                  <h5>
                    Order <strong>Now</strong> to Ship<br>
                    <strong>Tomorrow</strong><span style="padding-left: 5px; top: 2px;" class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
                  </h5>
                </section>
              </div>
            </li>
          </ul>
      </div>

      <div class="box col-xs-12 col-sm-3 col-md-3 col-lg-3">
        <li>
          <a ng-href="{{item.product.description.header.link.url}}">
            <h4>{{item.product.description.header.link.name}}<h4>
            <h5>{{item.product.description.header.link.brand}}<h5>
          </a>
          <span>{{item.product.description.manufacturer.text}} #{{item.product.description.sku.id}}<span>
            <i class="fa fa-circle" style="font-size: 9px;"></i>
          <span>MFR# {{item.product.description.manufactuer.number}}<span><hr>
          <h5>TOP HIGHLIGHTS</h5>
          <ul ng-repeat="highlight in item.product.description.highlight.sellingPoints.listitem">
            <li>{{highlight}}</li>
          </ul><hr>
          <div style="display: inline;">
            <section style="float: left; width: 50%; height: 50px; border-right: 3px gray solid;">
              <h5>{{item.product.description.additionalInfo.comments.availability}} : {{item.product.description.additionalInfo.comments.inStock}}</h5>
            </section>
            <section style=" float: right; width: 50%; height: 50px; padding-left: 25px;">
              <h5>
                Order <strong>Now</strong> to Ship<br>
                <strong>Tomorrow</strong><span style="padding-left: 5px; top: 2px;" class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
              </h5>
            </section>
          </div>
        </li>
      </div>
  </div>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="item in items | offset: currentPage*itemsPerPage | limitTo: itemsPerPage">
          <td>
            <img ng-src="{{item.product.image.link.src}}"
                 alt="{{item.product.image.link.title}}"
                 title ="{{item.product.image.link.title}}"
                 width= "{{item.product.image.link.width}}"
                 height="{{item.product.image.link.height}}"><br>

            <div class="ratings-stars text-center" style="display: inline; padding-top: 7px;">
              <i class="fa fa-star fa-2x" style="color: gray"></i>
              <i class="fa fa-star fa-2x" style="color: gray"></i>
              <i class="fa fa-star fa-2x" style="color: gray"></i>
              <i class="fa fa-star fa-2x" style="color: gray"></i>
              <i class="fa fa-star fa-2x" style="color: gray"></i>
            </div><br>
            <a href="#" style="margin-top: 15px;" class="btn btn-default btn-lg active" role="button">Add To Compare</a>
          </td>


          <td>

          </td>
        </tr>
      </tbody>
      <tfoot>
        <td colspan="3">
          <div class="pagination">
            <ul>
              <li ng-class="prevPageDisabled()">
                <a href ng-click="prevPage()">« Prev</a>
              </li>
              <li ng-repeat="n in range()" ng-class="{active: n == currentPage}" ng-click="setPage(n)">
                <a href="#">{{n+1}}</a>
              </li>
              <li ng-class="nextPageDisabled()">
                <a href ng-click="nextPage()">Next »</a>
              </li>
            </ul>
          </div>
        </td>
      </tfoot>
    </table>
  </div>
</body>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.min.js'></script>
<script
			  src="http://code.jquery.com/jquery-3.1.1.slim.min.js"
			  integrity="sha256-/SIrNqv8h6QGKDuNoLGA4iret+kyesCkHGzVUUV0shc="
			  crossorigin="anonymous"></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js'></script>

    <script src="js/index.js"></script>

</body>
</html>



  var ProductService = (function ($http) {
      function ProductService($http) {
        var _this = this,
            ProductService = {};

        return {
          getProducts: function() {
            return _this.$http.get("./api/products.json")
              .then(function(result) {
                return result.data[0];
              });
          }
        }
      }
  })();


  //ProductService.$inject = ['$http'];

angular
    .module('MyApp')
    .factory('ProductService', ProductService);

var app = angular.module("MyApp", []);

app.filter('offset', function() {
  return function(input, start) {
    start = parseInt(start, 10);
    return input.slice(start);
  };
});

app.controller("PaginationCtrl", function($scope, ProductService) {

  ProductService.getProducts()
    .then(function(list){
          var arr = Object.keys(list).map(function(k) { return list[k]} );
          $scope.items = list;
          console.log(arr);
    });

  $scope.itemsPerPage = 5;
  $scope.currentPage = 0;

/**
  for (var i=0; i<50; i++) {
    $scope.items.push({ id: i, name: "name "+ i, description: "description " + i });
  }
**/
  $scope.range = function() {
    var rangeSize = 5;
    var ret = [];
    var start;

    start = $scope.currentPage;
    if ( start > $scope.pageCount()-rangeSize ) {
      start = $scope.pageCount()-rangeSize+1;
    }

    for (var i=start; i<start+rangeSize; i++) {
      ret.push(i);
    }
    return ret;
  };

  $scope.prevPage = function() {
    if ($scope.currentPage > 0) {
      $scope.currentPage--;
    }
  };

  $scope.prevPageDisabled = function() {
    return $scope.currentPage === 0 ? "disabled" : "";
  };

  $scope.pageCount = function() {
    return Math.ceil($scope.items.length/$scope.itemsPerPage)-1;
  };

  $scope.nextPage = function() {
    if ($scope.currentPage < $scope.pageCount()) {
      $scope.currentPage++;
    }
  };

  $scope.nextPageDisabled = function() {
    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
  };

  $scope.setPage = function(n) {
    $scope.currentPage = n;
  };

});