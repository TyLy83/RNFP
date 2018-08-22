/* 
 * This navigator is simply a container of all application logics.
 */

import { createStackNavigator } from 'react-navigation';
import MainScreen from '../screens/main.screen';
import DetailScreen from '../screens/details.screen';
import BottomNavigator from './bottom.navigator';
import RatingScreen from '../screens/rating.screen';
import FavoriteScreen from '../screens/favorite.screen';
import CommentScreen from '../screens/comment.screen';
import DirectionScreen from '../screens/direction.screen';
import ReservationScreen from '../screens/reservation.screen';


// main navigator configs
const mainNavConfig = {
    Main: MainScreen,
    Details: DetailScreen,
    BottomNavigator: BottomNavigator,
    // Ratings: RatingScreen,
    // Favorites: FavoriteScreen,
    // Comments: CommentScreen,
    // Direction: DirectionScreen,
    // Reservation: ReservationScreen,
}

// main route configs
const mainRouteConfig = {
    initialRouteName: 'Main',
    navigationOptions:({navigation})=> {
        return { header: null };
    }
}

export default createStackNavigator(mainNavConfig, mainRouteConfig);