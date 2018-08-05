import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { observer, inject } from 'mobx-react/native';
import ContainerComponent from '../components/container.component';
import { Icon } from 'native-base';
import globalVariables from '../variables/global.variables';


@inject('databaseStore')
@inject('navigatorStore')
@observer
export default class DetailScreen extends Component {

    constructor(props) {
        super(props);
        console.log(`main.screen.js constructor()`);
    }

    componentDidMount() {
        // debug purpose
        console.log(`main.screen.js componentDidMount()::`);
    }

    renderImages(images) {
        return (
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            >
                {
                    images.map((image, i) => {
                        return (
                            <Image
                                key={i}
                                source={image}
                                style={{
                                    height: 226,
                                }}
                            />
                        )
                    })
                }
            </ScrollView>
        )
    }

    details() {

        const { params } = this.props.navigation.state;
        const key = params ? params.key : null;
        const restaurant = this.props.databaseStore.details(key);
        const images = restaurant.images;

        return (
            <View>
                <View>
                    {
                        this.renderImages(images)
                    }
                </View>
                <View>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: '600',
                                color: '#000'
                            }}
                        >
                            {restaurant.name}
                        </Text>
                        <Text
                            style={{
                                color: '#000'
                            }}
                        >
                            {
                                restaurant.shortDesc
                            }
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingVertical: 20,
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigatorStore.navigate('Favorites')
                                }}
                            >
                                <Text
                                    style={{
                                        flexDirection: 'row',
                                        fontSize: 12,
                                    }}
                                >
                                    <Icon
                                        name='heart'
                                        type='MaterialCommunityIcons'
                                        style={{
                                            fontSize: 12,
                                            paddingRight: 10,
                                        }}
                                    />5
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigatorStore.navigate('Ratings')
                                }}
                            >
                                <Text
                                    style={{
                                        flexDirection: 'row',
                                        fontSize: 12,
                                    }}
                                >
                                    <Icon
                                        name='star'
                                        type='MaterialCommunityIcons'
                                        style={{
                                            fontSize: 12,
                                            paddingRight: 10,
                                        }}
                                    />4.7
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigatorStore.navigate('Comments')
                                }}
                            >
                                <Text
                                    style={{
                                        flexDirection: 'row',
                                        fontSize: 12,
                                    }}
                                >
                                    <Icon
                                        name='comment'
                                        type='MaterialCommunityIcons'
                                        style={{
                                            fontSize: 12,
                                            paddingRight: 10,
                                        }}
                                    />2
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }

    render() {
        return (
            <ContainerComponent
                paddingHorizontal={globalVariables.paddingHorizontal}
                paddingVertical={globalVariables.paddingVertical}
                backgroundColor='#fff'
            >
                <View>
                    <Icon
                        name='arrow-left'
                        type='MaterialCommunityIcons'
                        onPress={() => this.props.navigatorStore.navigate('Main')}
                    />
                </View>
                <View>
                    <Icon
                        name='menu'
                        type='MaterialCommunityIcons'
                        onPress={() => this.props.navigatorStore.openDrawer()}
                    />
                </View>
                <View>
                    {
                        this.details()
                    }
                </View>
            </ContainerComponent>
        )
    }
}

const styles = {
    container: {
        flex: 1,
    }
}