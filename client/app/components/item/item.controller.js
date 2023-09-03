class ItemController {
  constructor(itemService) {
    'ngInject';
    this.itemService = itemService;
    this.name = 'item';
    this.itemList = this.itemService.query() || [];
  }
}

export default ItemController;
