import React, { Component } from 'react';
import { Dimensions, ScrollView, View, Text } from 'react-native';
import { Icon } from 'native-base';
import { observer, inject } from 'mobx-react/native';
import ContainerComponent from '../components/container.component';
import HeaderDetails from '../components/header.details';
import variables from '../variables/index.variables';
import FooterDetails from '../components/footer.details';


@inject('navigatorStore')
@observer
export default class FavoriteScreen extends Component {


    render() {

        const { paddingHorizontal, paddingVertical } = variables.globalVariables;
        const { params } = this.props.navigation.state;
        const item = params ? params.item : null;
        const { favorites } = item.restaurant;
        const width = Dimensions.get('window').width;

        return (
            <ContainerComponent
                coverColor='#fff'
            >
                <View
                    style={{
                        paddingHorizontal: paddingHorizontal,
                        paddingTop: paddingVertical,
                        paddingBottom: paddingVertical / 2,
                        backgroundColor: '#fff',
                    }}
                >
                    <HeaderDetails
                        item={item}
                        title={item.restaurant.name}
                        previous='Details'
                    />
                </View>
                <View
                    style={{
                        flex: 4,
                        // paddingHorizontal: paddingHorizontal,
                        // paddingVertical: paddingVertical,
                        backgroundColor: '#f9f9f9',
                    }}
                >
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    //     style={{
                    //         marginVertical: paddingVertical,
                    //     }}
                    >
                        <View
                            style={{ flex: 1 }}
                        >
                            {
                                favorites.map((favorite, i) => {
                                    return (
                                        <View
                                            key={i}
                                            style={{
                                                marginVertical: paddingHorizontal / 2,
                                                paddingVertical: paddingVertical / 2,
                                                paddingHorizontal: paddingHorizontal,
                                                alignItems: 'center',
                                                backgroundColor: '#fff'
                                            }}
                                        >
                                            <Text>
                                                <Icon
                                                    name='heart'
                                                    type='MaterialCommunityIcons'
                                                    style={{ 
                                                        color: '#000',
                                                        fontSize: 45, 
                                                    }}
                                                />
                                            </Text>
                                            <Text>
                                                {
                                                    favorite.user.fullName
                                                }
                                            </Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        paddingHorizontal: paddingHorizontal,
                        paddingVertical: paddingVertical / 2,
                        width: width,
                        backgroundColor: '#fff',
                    }}
                >
                    <FooterDetails
                        title='Favorites'
                        item={item}
                    />
                </View>
            </ContainerComponent>
        )
    }
}

