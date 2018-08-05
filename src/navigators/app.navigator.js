/* 
 * This navigator is simply a container of all navigator.
 * If a user already login, the MainNavigator(main.navigator.js) will render
 * or redirect to AuthNavigator(auth.navigator.js)
 */
import { createSwitchNavigator } from 'react-navigation';
import LoaginScreen from '../screens/loading.screen';
import AuthNavigator from './auth.navigator';
import MainNavigator from './main.navigator';
//import LeftNavigator from './left.navigator';
import SideBarNavigator from './sidebar.navigator';



// loading screen
const Loading = {
    screen: LoaginScreen,
    navigationOptions: {
        header: null
    }
}

// stack config obj
const appNavConfig = {
    Loading: Loading,
    AuthNavigator: AuthNavigator,
    //LeftNavigator: LeftNavigator,
    SideBarNavigator: SideBarNavigator
}

// route config obj
const appRouteConfig = {
    initialRouteName : 'Loading'
}

const appNavigator = createSwitchNavigator(appNavConfig, appRouteConfig);

export default appNavigator;