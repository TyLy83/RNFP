import { observable, action } from 'mobx';
// import source from './data.json';
import data from './data';
// import { Item } from 'native-base';

export default class DatabaseStore {

    @observable item = null;

    @observable list = data;

    @action details(key) {
        this.item = this.list[key];
        return this.item;
    }

    @action load() {
        this.list = data;
        return this.list;
    }

}