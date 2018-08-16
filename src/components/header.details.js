import React, { Component } from 'react';
import { Platform, View, Text } from 'react-native';
import { Button, Icon } from 'native-base';
import { observer, inject } from 'mobx-react/native';
import variables from '../variables/index.variables';

const { globalStyles, globalVariables } = variables;
const { iconStyle } = globalStyles;
const { paddingHorizontal } = globalVariables;


@inject('navigatorStore')
@observer
export default class HeaderDetails extends Component {

    renderContent() {

        const { navigatorStore, item, title, previous, backgroundColor } = this.props;

        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: backgroundColor,
                }}
            >
                <View>
                    <Button
                        transparent
                        onPress={() => navigatorStore.openDrawer()}
                    >
                        <Icon
                            name='ios-menu-outline'
                            style={iconStyle}
                        />
                    </Button>
                </View>
                <View>
                    <Text
                        style={{
                            fontSize: 18,
                            color: '#000'
                        }}

                    >
                        {title}
                    </Text>
                </View>
                <View>
                    <Button
                        transparent
                        onPress={() => navigatorStore.navigate(`${previous}`, { 'item': item })}
                    >
                        <Icon
                            name='ios-close'
                            style={iconStyle}
                        />
                    </Button>
                </View>
            </View>
        )
    }

    render() {
        const { backgroundColor } = this.props;
        return (
            <View
                style={{
                    paddingHorizontal: paddingHorizontal,
                    backgroundColor: { backgroundColor },
                }}
            >
                {
                    this.renderContent()
                }
            </View>
        )
    }
}