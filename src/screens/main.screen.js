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
import variables from '../variables/index.variables';
import HeaderBarComponent from '../components/headerbar.component';
import ListItemComponent from '../components/listitem.component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

@inject('navigatorStore')
@inject('databaseStore')
//@inject('variables')
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

    displayList(list) {

        const { paddingHorizontal, paddingVertical } = variables.globalVariables;
        const { navigatorStore } = this.props;

        return (
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{
                    marginVertical: paddingVertical / 2,
                }}
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
                                    marginVertical: paddingVertical / 4,
                                    paddingVertical: paddingVertical/ 2,
                                    paddingHorizontal: paddingHorizontal,
                                    backgroundColor: '#fff',
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => navigatorStore.navigate('Details', { 'item': item })}
                                >
                                    <Image
                                        source={uri}
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
                                                                name='star-outline'
                                                                style={{ fontSize: 18 }}
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
                                                                name='message-outline'
                                                                style={{
                                                                    fontSize: 18
                                                                }}
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
                                                                name='heart-outline'
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

        const { navigatorStore, databaseStore } = this.props;
        const { paddingHorizontal, paddingVertical } = variables.globalVariables;
        const list = databaseStore.list;

        return (
            <ContainerComponent
                coverColor='#fff'
            >
                <View
                    style={{
                        paddingHorizontal: paddingHorizontal,
                        paddingTop: paddingVertical,
                        paddingBottom: paddingVertical/2,
                        backgroundColor: '#fff'
                    }}
                >
                    <HeaderBarComponent
                        title='Main'
                        left='menu'
                        leftNavigator={navigatorStore.openDrawer}
                    />
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
