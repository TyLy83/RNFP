/* 
 * This navigator is simply a bottom tab navigator.
 */

import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CommentScreen from '../screens/comment.screen';
import FavoriteScreen from '../screens/favorite.screen';
import RatingScreen from '../screens/rating.screen';

const botNavConfig = {
    Ratings: RatingScreen,
    Favorites: FavoriteScreen,
    Comments: CommentScreen
}

const botRouteConfig = {    
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Ratings') {
                iconName = `star${focused ? '' : '-outline'}`;
            } else if (routeName === 'Favorites') {
                iconName = `heart${focused ? '' : '-outline'}`;
            } else if (routeName === 'Comments') {
                iconName = `message${focused ? '' : '-outline'}`;
            }
            return <Icon name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: '#333',
        style: {
            backgroundColor: '#fff',
            borderTopWidth: 0,
        }
    },
}

const DetailTabNavigator = createBottomTabNavigator(botNavConfig, botRouteConfig);

export default DetailTabNavigator;