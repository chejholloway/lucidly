import config from '../../config';

export default class ItemService {
  constructor($http) {
    'ngInject';
    const itemService = () => {
    	return this.$http(config.api.host);
    }
    return itemService;
  }
}
