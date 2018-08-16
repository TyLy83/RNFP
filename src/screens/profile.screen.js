import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button, Icon } from 'native-base';
import ContainerComponent from '../components/container.component';
import { observer, inject } from 'mobx-react/native';
import variables from '../variables/index.variables';


@inject('navigatorStore')
@inject('authenticatorStore')
@observer
export default class ProfileScreen extends Component {

    render() {
        const { navigatorStore, authenticatorStore } = this.props;
        const { paddingHorizontal, paddingVertical } = variables.globalVariables;
        const { iconStyle } = variables.globalStyles;

        return (
            <ContainerComponent
                coverColor='rgba(255,255,255,1)'
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#f9f9f9',
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            backgroundColor: '#fff',
                            paddingHorizontal: paddingHorizontal,
                        }}
                    >
                        <View>
                            <Button
                                transparent
                                onPress={() => {
                                    navigatorStore.openDrawer()
                                }}
                            >
                                <Icon
                                    name='ios-menu-outline'
                                    style={iconStyle}
                                />
                            </Button>
                        </View>
                        <View>
                            <Button
                                transparent
                                onPress={() => {
                                    navigatorStore.navigate('Main')
                                }}
                            >
                                <Icon
                                    name='ios-close'
                                    style={iconStyle}
                                />
                            </Button>
                        </View>
                    </View>
                    <View>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={{
                                    paddingVertical: paddingHorizontal
                                }}
                            >
                                <Image
                                    source={require('../../assets/peoples/john-does.jpg')}
                                    style={{
                                        height: 180,
                                        width: 180,
                                        borderRadius: 90
                                    }}
                                />
                            </View>
                            <Text
                                style={{
                                    paddingVertical: paddingHorizontal / 2,
                                    fontSize: 25,
                                    fontWeight: '600'
                                }}
                            >
                                {authenticatorStore.user.email}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            paddingVertical: paddingHorizontal / 2,
                            paddingHorizontal: paddingHorizontal
                        }}
                    >
                        <View
                            style={[
                                styles.listItem,
                                {
                                    paddingHorizontal: paddingHorizontal
                                }
                            ]}
                        >
                            <Text>Reservations</Text>
                            <Button
                                transparent
                            >
                                <Icon
                                    name='ios-calendar-outline'
                                    style={{ color: '#000' }}
                                />
                            </Button>
                        </View>
                        <View
                            style={[
                                styles.listItem,
                                {
                                    paddingHorizontal: paddingHorizontal
                                }
                            ]}
                        >
                            <Text>Notifcations</Text>
                            <Button
                                transparent
                            >
                                <Icon
                                    name='ios-notifications-outline'
                                    style={{ color: '#000' }}
                                />
                            </Button>
                        </View>
                        <View
                            style={[
                                styles.listItem,
                                {
                                    paddingHorizontal: paddingHorizontal
                                }
                            ]}
                        >
                            <Text>Settings</Text>
                            <Button
                                transparent
                            >
                                <Icon
                                    name='ios-settings-outline'
                                    style={{ color: '#000' }}
                                />
                            </Button>
                        </View>
                        <View
                            style={{
                                marginVertical: 10,
                                backgroundColor: '#fff'
                            }}
                        >
                            <Button
                                transparent
                                full
                                onPress={() => {
                                    authenticatorStore.signOut()
                                }}
                            >
                                <Icon
                                    name='ios-power-outline'
                                    style={{ color: '#000' }}
                                />
                                <Text>Logout</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </ContainerComponent>
        )
    }
}

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 3,
    }
})