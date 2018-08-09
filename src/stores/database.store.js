import { observable, action } from 'mobx';
import source from './data.json';
import data from './data';
import { Item } from 'native-base';

export default class DatabaseStore {

    @observable list = data;

    @action details(key) {
        return this.list[key];
    }

    @action load() {
        this.list = data;
        return this.list;
    }

}