import { createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../screens/login.screen';
import LoaginScreen from '../screens/loading.screen';

// loading screen
const Loading = {
    screen: LoaginScreen,
    navigationOptions: {
        header: null
    }
}

// login screen
const Login = {
    screen: LoginScreen,
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

export default createSwitchNavigator(switchConfig, routeConfig)