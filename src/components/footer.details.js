import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'native-base';
import { observer, inject } from 'mobx-react/native';
// import variables from '../variables/index.variables';

@inject('navigatorStore')
@observer
export default class FooterDetails extends Component {

    render() {

        const { navigatorStore, item, title, backgroundColor } = this.props;

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
                >
                    <Icon
                        name='book-open'
                        type='MaterialCommunityIcons'
                        style={{ color: '#000', }}
                    />
                </Button>
                <Button
                    transparent
                >
                    <Icon
                        name='compass-outline'
                        type='MaterialCommunityIcons'
                        style={{ color: '#000', }}
                    />
                </Button>
                <Button
                    transparent
                    onPress={() => {
                        navigatorStore.navigate('Ratings', { 'item': item })
                    }}
                >
                    <Icon
                        name={title == 'Ratings' ? 'star' : 'star-outline'}
                        type='MaterialCommunityIcons'
                        style={{ color: '#000' }}
                    />
                </Button>
                <Button
                    transparent
                    onPress={() => {
                        navigatorStore.navigate('Favorites', { 'item': item })
                    }}
                >
                    <Icon
                        name={title == 'Favorites' ? 'heart' : 'heart-outline'}
                        type='MaterialCommunityIcons'
                        style={{ color: '#000' }}
                    />
                </Button>
                <Button
                    transparent
                    onPress={() => {
                        navigatorStore.navigate('Comments', { 'item': item })
                    }}
                >
                    <Icon
                        name={title == 'Comments' ? 'message' : 'message-outline'}
                        type='MaterialCommunityIcons'
                        style={{ color: '#000' }}
                    />
                </Button>
            </View>
        )
    }
}
