import React, { Component } from 'react';
import { Platform, Dimensions, View } from 'react-native';
import { Button, Icon } from 'native-base';
import { observer, inject } from 'mobx-react/native';
import variables from '../variables/index.variables';

const { globalStyles, globalVariables } = variables;
const { paddingHorizontal, paddingVertical } = globalVariables;
const { width } = Dimensions.get('window');

@inject('navigatorStore')
@observer
export default class FooterDetails extends Component {

    navigate(route, params){
        const { navigatorStore } = this.props;
        navigatorStore.navigate(route, params)
    }

    renderContent() {

        const { item, title, backgroundColor } = this.props;
        const { iconStyle } = globalStyles;

        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: backgroundColor
                }}
            >
                <Button
                    transparent
                    onPress={() => {
                        this.navigate('Reservation',{'id': item.id})
                    }}
                >
                    <Icon
                        name={title == 'Reservation' ? 'ios-calendar' : 'ios-calendar-outline'}
                        style={iconStyle}
                    />
                </Button>
                <Button
                    transparent
                    onPress={() => {
                        this.navigate('Direction',{'id': item.id})
                    }}
                >
                    <Icon
                        name={title == 'Direction' ? 'ios-pin' : 'ios-pin-outline'}
                        style={iconStyle}
                    />
                </Button>
                <Button
                    transparent
                    onPress={() => {
                       this.navigate('Ratings',{'id': item.id})
                    }}
                >
                    <Icon
                        name={title == 'Ratings' ? 'ios-star' : 'ios-star-outline'}
                        style={iconStyle}
                    />
                </Button>
                <Button
                    transparent
                    onPress={() => {
                        this.navigate('Favorites',{'id': item.id})
                    }}
                >
                    <Icon
                        name={title == 'Favorites' ? 'ios-heart' : 'ios-heart-outline'}
                        style={iconStyle}
                    />
                </Button>
                <Button
                    transparent
                    onPress={() => {
                        this.navigate('Comments',{'id': item.id})
                    }}
                >
                    <Icon
                        name={title == 'Comments' ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
                        style={iconStyle}
                    />
                </Button>
            </View>
        );
    }

    render() {

        const { backgroundColor } = this.props;

        return (
            <View
                style={{
                    paddingHorizontal: paddingHorizontal,
                    width: width,
                    backgroundColor: backgroundColor,
                }}
            >
                {
                    this.renderContent()
                }
            </View>
        )
    }
}
