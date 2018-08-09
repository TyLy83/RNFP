import React, { Component } from 'react';
import { Dimensions, StyleSheet, ScrollView, View, Text } from 'react-native';
import { DrawerItems, SafeAreaView, createDrawerNavigator } from 'react-navigation';
import { Button, Icon } from 'native-base';
import variables from '../variables/index.variables';
import MainNavigator from './main.navigator';
import ProfileScreen from '../screens/profile.screen';
import HeaderBarComponent from '../components/headerbar.component';
import stores from '../stores/index.store';

const { width } = Dimensions.get('window');

const contentComponent = (props) => {

    const navigation = props.navigation;
    const params = navigation.state.routes[0].params;
    const { authenticatorStore, navigatorStore } = stores;
    const { globalVariables } = variables;

    return (

        <ScrollView>
            <SafeAreaView
                style={styles.container}
                forceInset={{
                    top: 'always',
                    horizontal: 'never',

                }}
            >
                <HeaderBarComponent
                    right='close'
                    rightNavigator={navigatorStore.closeDrawer}
                    paddingHorizontal={globalVariables.paddingHorizontal}
                />
                <View
                    style={{
                        width: width,
                        height: 150,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text>{params.user.email}</Text>
                </View>
                <View>
                    <DrawerItems {...props} />
                </View>
                <View>
                    <Button
                        iconLeft
                        transparent
                        primary
                        onPress={() => authenticatorStore.signOut()}
                    >
                        <Icon
                            name='power'
                            type='MaterialCommunityIcons'
                        />
                        <Text>Logout</Text>
                    </Button>
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