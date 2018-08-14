import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'native-base';
import { observer, inject } from 'mobx-react/native';
import variables from '../variables/index.variables';

@inject('navigatorStore')
@observer
export default class HeaderDetails extends Component {

    render() {

        const { navigatorStore, item, title, previous, backgroundColor } = this.props;
        const { iconStyle } = variables.styles;

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
}