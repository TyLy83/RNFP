import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
import { observer, inject } from 'mobx-react/native';
import ContainerComponent from '../components/container.component';
import GlobalVariables from '../variables/global.variables';

@inject('databaseStore')
@inject('navigatorStore')
@observer
export default class RatingScreen extends Component {

    rating(stars) {
        var ratings = []
        for (var i = 0; i < stars; i++) {
            ratings.push(
                <Icon
                    name='star'
                    type='MaterialCommunityIcons'
                    style={{ fontSize: 14 }}
                />

            )
        }
        return ratings;
    }

    render() {

        return (
            <ContainerComponent
                paddingHorizontal= {GlobalVariables.paddingHorizontal}
                paddingVertical={GlobalVariables.paddingVertical}
                backgroundColor='#fff'
            >
                <View>
                    <Text>
                        <Icon
                            name='menu'
                            type='MaterialCommunityIcons'
                            onPress={() => this.props.navigation.toggleDrawer()}
                        />
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        {
                            this.rating(5)
                        }
                    </View>
                    <View>
                        <Text>5</Text>
                    </View>
                </View>
            </ContainerComponent>
        )
    }
}

