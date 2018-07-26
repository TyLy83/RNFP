/* 
 * This navigator used for authentication process.
 * A new user can create login, create a new user account
 * or simply link their facebook and google account etc
 */
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Login from './login.navigator';
import LoaginScreen from '../screens/loading.screen';

// loading screen
const Loading = {
    screen: LoaginScreen,
    navigationOptions: {
        header: null
    }
}

// stack config obj
const switchConfig = {
    Login: Login,
    Loading: Loading
}

// route config obj
const routeConfig = {
    initialRouteName : 'Loading'
}

const authNavigator = createSwitchNavigator(switchConfig, routeConfig);

export default authNavigator;