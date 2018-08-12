import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'native-base';
import { observer, inject } from 'mobx-react/native';

@inject('navigatorStore')
@observer
export default class HeaderDetails extends Component {

    render() {

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
                        <Text>
                            <Icon
                                name='menu'
                                type='MaterialCommunityIcons'
                                style={{ color: '#000' }}
                            />
                        </Text>
                    </Button>
                </View>
                <View>
                    <Text
                        style={{
                            fontSize: 21,
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
                        <Text>
                            <Icon
                                name='close'
                                type='MaterialCommunityIcons'
                                style={{ color: '#000' }}
                            />
                        </Text>
                    </Button>
                </View>
            </View>
        )
    }
}