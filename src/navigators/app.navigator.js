/* 
 * This navigator is simply a container of all navigator.
 * If a user already login, the MainNavigator(main.navigator.js) will render
 * or redirect to AuthNavigator(auth.navigator.js)
 */
import { createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../screens/login.screen';
import LoaginScreen from '../screens/loading.screen';
import Auth from './auth.navigator';

// loading screen
const Loading = {
    screen: LoaginScreen,
    navigationOptions: {
        header: null
    }
}

// stack config obj
const switchConfig = {
    Loading: Loading,
    Auth: Auth
}

// route config obj
const routeConfig = {
    initialRouteName : 'Loading'
}

const appNavigator = createSwitchNavigator(switchConfig, routeConfig);

export default appNavigator;