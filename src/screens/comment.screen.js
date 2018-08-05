import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
import { observer, inject } from 'mobx-react/native';
import ContainerComponent from '../components/container.component';


@inject('databaseStore')
@observer
export default class CommentScreen extends Component {

    render() {
        return (
            <ContainerComponent
                paddingHorizontal={25}
                paddingVertical={35}
                backgroundColor='#fff'
            >
                <View>
                    <Text>Comments</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text>
                        <Icon
                            name='message'
                            type='MaterialCommunityIcons'
                        />
                    </Text>
                </View>
            </ContainerComponent>
        )
    }
}

