import angular from 'angular';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import 'normalize.css';
import './assets/styles/style.scss';

export default angular.module('app', [
  Common,
  Components
])
.config(($locationProvider,  $windowProvider) => {
  'ngInject';
})
.component('app', AppComponent);
