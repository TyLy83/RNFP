import React, { Component } from 'react';
import { Dimensions, StyleSheet, ScrollView, View, Text } from 'react-native';
import { DrawerItems, SafeAreaView, createDrawerNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import globalVariables from '../variables/global.variables';
import MainNavigator from './main.navigator';
import ProfileScreen from '../screens/profile.screen';


const { width } = Dimensions.get('window');

const contentComponent = (props) => {

    const navigation = props.navigation;
    const params = navigation.state.routes[0].params;
    console.log(`state:::${JSON.stringify(navigation.state)}`);

    return (
        <ScrollView>
            <SafeAreaView
                style={styles.container}
                forceInset={{
                    top: 'always',
                    horizontal: 'never'
                }}
            >
                <View
                    style={{
                        paddingHorizontal: globalVariables.paddingHorizontal
                    }}
                >
                    <Text>
                        <Icon
                            name='arrow-left'
                            type='MaterialCommunityIcons'
                            onPress={() => navigation.closeDrawer()}
                        />
                    </Text>
                </View>
                <View
                    style={{
                        width: width,
                        height: 150,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text>{params.user.email}</Text>
                </View>
                <View>
                    <DrawerItems {...props} />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const sidebarNavigator = createDrawerNavigator(
    {
        MainNavigator: {
            screen: MainNavigator,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name='home-outline'
                        type='MaterialCommunityIcons'
                        style={{ color: tintColor, fontSize: 20 }}
                    />
                ),
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                drawerLabel: 'Profile',
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name='account'
                        type='MaterialCommunityIcons'
                        style={{ color: tintColor, fontSize: 20 }}
                    />
                ),
            }
        },
    },
    {
        //drawerPosition: 'left',
        contentComponent: contentComponent,
        drawerWidth: width
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default sidebarNavigator;