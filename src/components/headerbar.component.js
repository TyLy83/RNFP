import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Icon, Text } from 'native-base';


export default class HeaderBarComponent extends Component {

    renderLeft(left) {
        const { leftNavigator, leftParams } = this.props;
        if (left) {
            return (
                <Button
                    transparent
                    onPress={() => leftParams ? leftNavigator(leftParams) : leftNavigator()}

                >
                    <Icon
                        name={left}
                        type='MaterialCommunityIcons'
                        style={{
                            marginLeft: 0,
                            color: '#000',
                        }}
                    />
                </Button>

            )
        }
    }

    renderRight(right) {
        const { rightNavigator, rightParams } = this.props;
        if (right)
            return (
                <Button
                    transparent
                    onPress={() => rightParams ? rightNavigator(rightParams) : rightNavigator()}
                >
                    <Icon
                        name={right}
                        type='MaterialCommunityIcons'
                        style={{
                            marginLeft: 0,
                            marginRight:0,
                            color: 'black',
                        }}
                    />
                </Button>
            )
    }

    renderTitle(title) {
        if (title) {
            return (
                <Text
                    style={{
                        fontSize: 23,
                        fontWeight: '600'
                    }}
                >
                    {title}
                </Text>
            )
        }
    }

    render() {
        const { left, right, title, paddingHorizontal, paddingVertical } = this.props;
        return (
            <View
                style={
                    [
                        {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        },
                        {
                            paddingHorizontal: paddingHorizontal,
                            paddingVertical: paddingVertical,
                        }
                    ]
                }
            >
                <View
                    style={{
                        justifyContent: 'flex-start',
                        paddingHorizontal: 0,
                    }}
                >
                    {
                        this.renderLeft(left)
                    }
                </View>
                <View>
                    {
                        this.renderTitle(title)
                    }
                </View>
                <View>
                    {
                        this.renderRight(right)
                    }
                </View>
            </View>
        )
    }
}
