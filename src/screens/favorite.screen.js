import React, { Component } from 'react';
import { Platform, Dimensions, ScrollView, View, Text, Image } from 'react-native';
import { Icon } from 'native-base';
import { observer, inject } from 'mobx-react/native';
import ContainerComponent from '../components/container.component';
import HeaderDetails from '../components/header.details';
import variables from '../variables/index.variables';
import FooterDetails from '../components/footer.details';


@inject('navigatorStore')
@inject('databaseStore')
@observer
export default class FavoriteScreen extends Component {


    render() {

        const { paddingHorizontal, paddingVertical } = variables.globalVariables;
        const { databaseStore } = this.props;
        const item = databaseStore.item;
        const { favorites } = item.restaurant;

        return (
            <ContainerComponent
                coverColor='#fff'
            >
                <HeaderDetails
                    item={item}
                    title='Favorites'
                    previous='Details'
                />
                <View
                    style={{
                        flex: 4,
                        backgroundColor: '#f9f9f9',
                    }}
                >
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        <View
                            style={{
                                flex: 1,
                                paddingBottom: paddingVertical * 3,
                            }}
                        >
                            {
                                favorites.map((favorite, i) => {
                                    return (
                                        <View
                                            key={i}
                                            style={{
                                                marginVertical: i == 0 ? paddingHorizontal : paddingHorizontal / 2,
                                                marginHorizontal: paddingHorizontal,
                                                paddingVertical: paddingHorizontal / 2,
                                                paddingHorizontal: paddingHorizontal / 2,
                                                alignItems: 'center',
                                                backgroundColor: '#fff'
                                            }}
                                        >
                                            <View
                                                style={{
                                                    paddingHorizontal: paddingHorizontal
                                                }}
                                            >
                                                <Image
                                                    source={favorite.user.pictureUri}
                                                    style={{
                                                        height: 60,
                                                        width: 60,
                                                        borderRadius: 30,
                                                    }}
                                                />
                                            </View>
                                            <Text>
                                                {
                                                    favorite.user.fullName
                                                }
                                            </Text>
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
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
            </ContainerComponent>
        )
    }
}

