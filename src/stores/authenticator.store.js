// import { AsyncStorage } from "react-native";
import { observable, action } from 'mobx';
import NavigatorStore from './navigator.store';
import firebase from 'react-native-firebase';
import { LoginManager, AccessToken } from 'react-native-fbsdk';


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
                if (user) {
                    this.user.email = user.email;
                    this.user.password = user.password;
                    this.navigatorStore.navigate('MainNavigator', { user: this.user });
                }
                else
                    this.navigatorStore.navigate('Login');
            });

    }

    @action facebookLogin() {
        // LoginManager.logInWithReadPermissions(['public_profile']).then((result) => {
        //     if (result.isCancelled) {
        //         console.log('Login cancelled');
        //     } else {
        //         AccessToken.getCurrentAccessToken().then((data) => {
        //             // console.log(data.accessToken.toString())
        //             const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
        //             const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
        //             console.log(JSON.stringify(currentUser));
        //         })
        //     }
        // }, (error) => {
        //     alert(error)
        // });
        (async () => {
            try {
                const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

                if (result.isCancelled) {
                    throw new Error('User cancelled request'); // Handle this however fits the flow of your app
                }

                console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

                // get the access token
                const data = await AccessToken.getCurrentAccessToken();

                if (!data) {
                    throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
                }

                // create a new firebase credential with the token
                const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

                // login with credential
                const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);

                console.info(JSON.stringify(currentUser.user.toJSON()));

            } catch (e) {
                console.error(e);
            }
        })()
    }

}