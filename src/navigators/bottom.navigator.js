/* 
 * This navigator is simply a bottom tab navigator.
 */

import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
// import { Icon } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import CommentScreen from '../screens/comment.screen';
import FavoriteScreen from '../screens/favorite.screen';
import RatingScreen from '../screens/rating.screen';
import DirectionScreen from '../screens/direction.screen';
import ReservationScreen from '../screens/reservation.screen';


const botNavConfig = {
    Ratings: RatingScreen,
    Favorites: FavoriteScreen,
    Comments: CommentScreen,
    Direction: DirectionScreen,
    Reservation: ReservationScreen
}

const botRouteConfig = { 
       
    navigationOptions: ({ navigation }) => ({

        tabBarIcon: ({ focused, tintColor }) => {

            const { routeName } = navigation.state;

            let iconName;

            if (routeName === 'Ratings') {
                iconName = `ios-star${focused ? '' : '-outline'}`;
            } else if (routeName === 'Favorites') {
                iconName = `ios-heart${focused ? '' : '-outline'}`;
            } else if (routeName === 'Comments') {
                iconName = `ios-chatboxes${focused ? '' : '-outline'}`;
            } else if (routeName === 'Reservation'){
                iconName = `ios-calendar${focused ? '' : '-outline'}`;
            } else if (routeName === 'Direction'){
                iconName = `ios-pin${focused ? '' : '-outline'}`;
            }

            return <Icon name={iconName} size={25} color={tintColor} />;
        },
        
    }),
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#000',
        inactiveTintColor: '#333',
        style: {
            backgroundColor: '#fff',
            borderTopColor: '#fff',
            borderTopWidth: 1,
        }
    },
    order: ['Reservation','Direction','Ratings','Favorites','Comments']
}

const DetailTabNavigator = createBottomTabNavigator(botNavConfig, botRouteConfig);

export default DetailTabNavigator;