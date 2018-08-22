import React, { Component } from 'react';
import {
    Platform,
    Dimensions,
    View,
    Image,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { observer, inject } from 'mobx-react/native';
import ContainerComponent from '../components/container.component';
import variables from '../variables/index.variables';
import { Button, Icon } from 'native-base';

const { paddingHorizontal, paddingVertical } = variables.globalVariables;

@inject('navigatorStore')
@inject('databaseStore')
@observer
export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        // console.log(`main.screen.js constructor()`);
    }

    componentDidMount() {
        // debug purpose
        // console.log(`main.screen.js componentDidMount()::`);
    }

    renderHeader() {

        const { navigatorStore } = this.props;

        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Button
                        transparent
                        onPress={() => navigatorStore.openDrawer()}
                    >
                        <Icon
                            name='menu'
                            style={{
                                color: '#000',
                            }}
                        />
                    </Button>
                </View>

            </View>
        )
    }

    displayList(list) {

        const { navigatorStore } = this.props;

        return (
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                {
                    list.map((item, i) => {

                        const { id, restaurant } = item;
                        const { name, images, ratings, favorites, comments } = restaurant;
                        const { uri } = images[id];

                        return (
                            <View
                                key={i}
                                style={{
                                    marginVertical: paddingHorizontal,
                                    marginHorizontal: paddingHorizontal,
                                    paddingVertical: paddingVertical / 2,
                                    paddingHorizontal: paddingHorizontal,
                                    backgroundColor: '#fff',
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => navigatorStore.navigate('Details', {
                                        'item': item,
                                        'id': id
                                    })}
                                >
                                    <Image
                                        source={uri}
                                        style={{
                                            height: 226,
                                            width: null,
                                            borderRadius: 3,
                                        }}
                                    />
                                    <Text
                                        style={{
                                            fontSize: 21,
                                            fontWeight: '600',
                                            paddingVertical: paddingVertical / 4
                                        }}
                                    >
                                        {name}
                                    </Text>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <View>
                                            {
                                                (ratings => {
                                                    return (
                                                        <Text>
                                                            <Icon
                                                                name='ios-star-outline'
                                                            // style={{ fontSize: 18 }}
                                                            />
                                                            {
                                                                (() => {
                                                                    let stars = 0;
                                                                    ratings.map((rating, i) => {
                                                                        stars += rating.stars;
                                                                    });

                                                                    return (stars / ratings.length).toFixed(1);
                                                                })()
                                                            }
                                                        </Text>
                                                    )
                                                })(ratings)
                                            }
                                        </View>
                                        <View>
                                            {
                                                (comments => {
                                                    return (
                                                        <Text>
                                                            <Icon
                                                                name='ios-chatboxes-outline'
                                                            // style={{ fontSize: 18 }}
                                                            />
                                                            {
                                                                comments.length
                                                            }
                                                        </Text>
                                                    )
                                                })(comments)
                                            }
                                        </View>
                                        <View>
                                            {
                                                (favorites => {
                                                    return (
                                                        <Text>
                                                            <Icon
                                                                name='ios-heart-outline'
                                                                style={{
                                                                    fontSize: 18
                                                                }}
                                                            />
                                                            {
                                                                favorites.length
                                                            }
                                                        </Text>
                                                    )

                                                })(favorites)
                                            }
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        )
    }

    render() {

        const { databaseStore } = this.props;
        const list = databaseStore.list;

        return (
            <ContainerComponent
                coverColor='#fff'
            >
                <View>
                    {
                        this.renderHeader()
                    }
                </View>
                <View
                    style={{
                        flex: 1,
                        paddingBottom: 0,
                        backgroundColor: '#f9f9f9',
                    }}
                >
                    {
                        this.displayList(list)
                    }
                </View>
            </ContainerComponent>
        )
    }
}
