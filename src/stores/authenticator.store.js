import { AsyncStorage } from "react-native";
import { observable, action } from 'mobx';
import NavigatorStore from './navigator.store';

export default class AuthenticatorStore {

    @observable user = {
        email: null,
        password: null
    };

    @action signIn() {
        let navigatorStore = new NavigatorStore();
        if (this.user.email || this.user.password) {
            (async () => {
                try {
                    await AsyncStorage.setItem('user', JSON.stringify(this.user));
                    navigatorStore.navigate('MainNavigator', { user: this.user })
                } catch (error) {
                    // console.log(JSON.stringify(error));
                    alert('Unable to login')
                }
            })()
        }
        else {
            alert('Invalid email or password')
        }
    }

    @action signOut() {
        let navigatorStore = new NavigatorStore();
        (async () => {
            try {
                const value = await AsyncStorage.getItem('user');
                if (value !== null) {
                    // We have data!!
                    AsyncStorage.clear();
                    navigatorStore.navigate('Login');
                }
            } catch (error) {
                // Error retrieving data
                alert('Unable to logout')
            }
        })()
    }


    @action signUp() {
        let navigatorStore = new NavigatorStore();
        (async () => {
            try {
                await AsyncStorage.setItem('user', JSON.stringify(this.user));
                navigatorStore.navigate('MainNavigator', { user: this.user })
            } catch (error) {
                // Error retrieving data
                alert('Unable to authenticate user')
            }
        })()
    }

    @action auth() {
        let navigatorStore = new NavigatorStore();
        (async () => {
            try {
                const value = await AsyncStorage.getItem('user');
                if (value !== null) {
                    // // We have data!!
                    this.user = JSON.parse(value);
                    navigatorStore.navigate('MainNavigator', { user: this.user });
                } else {
                    navigatorStore.navigate('Login');
                }
            } catch (error) {
                // Error retrieving data
                alert('Unable to authenticate user')
            }
        })()
    }

}