import angular from 'angular';
import angularSanitize from 'angular-sanitize';
import angularTranslate from 'angular-translate';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import itemComponent from './item.component';
import itemService from './item.service';

const itemModule = angular.module('item', [
  angularTranslate,
  angularSanitize,
  uiRouter,
  ngResource
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
  .state('item', {
    url: '/item',
    component: 'item'
  });
})
.component('item', itemComponent)
.service('itemService', itemService)
.name;

export default itemModule;
