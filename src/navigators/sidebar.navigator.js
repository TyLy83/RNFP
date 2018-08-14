import React, { Component } from 'react';
import { Dimensions, StyleSheet, ScrollView, View, Text } from 'react-native';
import { DrawerItems, SafeAreaView, createDrawerNavigator } from 'react-navigation';
import { Button, Icon } from 'native-base';
import variables from '../variables/index.variables';
import MainNavigator from './main.navigator';
import ProfileScreen from '../screens/profile.screen';
import stores from '../stores/index.store';

const { width, height } = Dimensions.get('window');

const contentComponent = (props) => {

    const navigation = props.navigation;
    const params = navigation.state.routes[0].params;
    const { authenticatorStore, navigatorStore } = stores;
    const { paddingHorizontal, paddingVertical } = variables.globalVariables;

    return (

        <ScrollView>
            <SafeAreaView
                style={styles.container}
                forceInset={{
                    top: 'always',
                    horizontal: 'never',

                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        paddingHorizontal: paddingHorizontal
                    }}
                >
                    <Button
                        transparent
                        onPress={()=>navigatorStore.closeDrawer()}
                    >
                        <Icon
                            name='close'
                            style={{
                                color: '#000',
                                fontSize: 30
                            }}
                        />
                    </Button>
                </View>
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
                <View
                    style={{
                       marginVertical: paddingHorizontal
                    }}
                >
                    <Button
                        iconLeft
                        transparent
                        onPress={() => authenticatorStore.signOut()}
                    >
                        <Icon
                            name='power'
                            style={{
                                color: '#000',
                               
                            }}
                        />
                        <Text
                            style={{
                                paddingHorizontal: paddingHorizontal + 5
                            }}
                        >Logout</Text>
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
                        name='home'
                        // type='MaterialCommunityIcons'
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
                        name='person'
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