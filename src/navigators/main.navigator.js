/* 
 * This navigator is simply a container of all application logics.
 */

import { createStackNavigator } from 'react-navigation';
import MainScreen from '../screens/main.screen';
import DetailScreen from '../screens/details.screen';
import BottomNavigator from './bottom.navigator';


// main navigator configs
const mainNavConfig = {
    Main: MainScreen,
    Details: DetailScreen,
    BottomNavigator: BottomNavigator,
}

// main route configs
const mainRouteConfig = {
    initialRouteName: 'Main',
    navigationOptions:({navigation})=> {
        return { header: null };
    }
}

export default createStackNavigator(mainNavConfig, mainRouteConfig);