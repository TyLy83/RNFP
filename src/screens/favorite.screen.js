import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
import { observer, inject } from 'mobx-react/native';
import ContainerComponent from '../components/container.component';


@inject('databaseStore')
@observer
export default class FavoriteScreen extends Component {

    render() {
        return (
            <ContainerComponent
                paddingHorizontal={25}
                paddingVertical={35}
                backgroundColor='#fff'
            >
                <View>
                    <Text>Favorites</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text>
                        <Icon
                            name='heart'
                            type='MaterialCommunityIcons'
                        />
                    </Text>
                </View>
            </ContainerComponent>
        )
    }
}

