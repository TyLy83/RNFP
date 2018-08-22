import { AsyncStorage } from "react-native";
import { observable, action } from 'mobx';
import NavigatorStore from './navigator.store';
import firebase from 'react-native-firebase'

export default class AuthenticatorStore {

    navigatorStore = new NavigatorStore();

    @observable user = {
        email: null,
        password: null,
        errorMessage: null,
    };

    @action signIn() {

        // let navigatorStore = new NavigatorStore();
        const { email, password } = this.user;

        if (email || password) {

            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => this.navigatorStore.navigate('MainNavigator', { user: this.user }))
                .catch(error => alert(error.message))
        }
        else {
            alert('Invalid email or password')
        }
    }

    @action signOut() {

        firebase
            .auth()
            .signOut()
            .then(user => this.navigatorStore.navigate('Login'))
            .catch(error => alert(error.message))
    }


    @action signUp() {

        const { email, password } = this.user;

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => this.navigatorStore.navigate('Login'))
            .catch(error => {
                this.user.errorMessage = error.message;
                alert(error.message)
            })
    }

    @action auth() {

        firebase
            .auth()
            .onAuthStateChanged(user => {
                if (user){
                    this.user.email = user.email;
                    this.user.password = user.password;
                    this.navigatorStore.navigate('MainNavigator', { user: this.user });
                }                    
                else
                    this.navigatorStore.navigate('Login');
            });

    }

}