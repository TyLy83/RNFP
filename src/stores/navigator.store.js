import { observable, action } from "mobx";
import NavigatorService from '../navigators/service.navigator';

export default class NavigatorStore {

    @observable navigation= NavigatorService.getTopLevelNavigator();

    @action navigate(routeName, params) {
        NavigatorService.navigate(routeName, params)
    }

    @action openDrawer(){
        NavigatorService.openDrawer()
    }
}