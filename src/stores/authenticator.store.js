import { observable, action } from 'mobx';
import NavigatorStore from './navigator.store';

export default class AuthenticatorStore {

    @observable user = {
        email: 'user1@gmail.com'
    };

    @action signIn(email, password) {
        let navigatorStore = new NavigatorStore();
        navigatorStore.navigate('Forgot')
    }

    @action signOut(){
        let navigatorStore = new NavigatorStore();
        navigatorStore.navigate('Login');
    }

    @action signUp(email, password){
        let navigatorStore = new NavigatorStore();
        navigatorStore.navigate('Login');        
    }

}