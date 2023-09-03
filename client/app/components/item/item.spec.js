/* eslint-disable */
import ItemModule from './item';
import ItemController from './item.controller';
import ItemComponent from './item.component';
import ItemTemplate from './item.html';

describe('Item', () => {
  let $rootScope, $state, $location, $componentController, $compile, $translate;
  beforeEach(window.module(ItemModule));
  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
    $translate = $injector.get('$translate');
  }));

  describe('Module', () => {
    it('default component route should be item', () => {
      $location.url('/item');
      $rootScope.$digest();
      expect($state.current.component).to.eq('item');
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ItemComponent;

    it('includes the intended template',() => {
      expect(component.template).to.equal(ItemTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ItemController);
    });
  });

  describe('Controller', () => {
    let controller;
    beforeEach(() => {
      controller = $componentController('item', {
        $scope: $rootScope.$new()
      });
    });
    it('has a name property', () => {
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    let scope, template;
    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<item></item>')(scope);
      // scope.$apply();
    });
    it('has property name in template find by regex', () => {
      expect(ItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
    it('has name in template', () => {
      expect(template.find('h1').html()).to.eq('{{ $ctrl.name }}');
    });
  });
});
