import React, { Component } from 'react';
import { Platform, Dimensions, ScrollView, View, Text, Image } from 'react-native';
import { Button, Icon } from 'native-base';
import { observer, inject } from 'mobx-react/native';
import ContainerComponent from '../components/container.component';
import variables from '../variables/index.variables';
import HeaderDetails from '../components/header.details';
import FooterDetails from '../components/footer.details';


@inject('databaseStore')
@inject('navigatorStore')
@observer
export default class RatingScreen extends Component {

    componentDidMount() {
        // console.log('component did mounted::')
        // const item = this.props.navigation.getParam('item');
        // this.props.navigation.setParams({ 'item': item })
    }

    render() {

        const { paddingHorizontal, paddingVertical } = variables.globalVariables;
        const { databaseStore } = this.props;
        const  item = databaseStore.item;
        const { restaurant } = item;
        const { ratings } = restaurant;

        return (
            <ContainerComponent
                coverColor='#fff'
            >
                <HeaderDetails
                    title='Ratings'
                    item={item}
                    previous='Details'
                />
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#f9f9f9',
                    }}
                >
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        <View
                            style={{
                                paddingBottom: paddingVertical * 2
                            }}
                        >
                            {
                                ratings.map((rating, i) => {
                                    return (
                                        <View
                                            key={i}
                                            style={{
                                                flexDirection: 'column',
                                                paddingVertical: paddingVertical / 2,
                                                paddingHorizontal: paddingHorizontal,
                                                marginVertical: i == 0 ? paddingHorizontal : paddingHorizontal / 2,
                                                marginHorizontal: paddingHorizontal,
                                                backgroundColor: '#fff'
                                            }}
                                        >
                                            <View
                                                style={{
                                                    paddingVertical: paddingVertical / 2,
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Image
                                                    source={rating.user.pictureUri}
                                                    style={{
                                                        height: 60,
                                                        width: 60,
                                                        borderRadius: 30,
                                                    }}
                                                />
                                                <Text>
                                                    {rating.user.fullName}
                                                </Text>
                                            </View>
                                            <View
                                                key={i}
                                                style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between'
                                                }}
                                            >
                                                {
                                                    (rating => {

                                                        let length = rating.stars;
                                                        let numbStars = [];

                                                        for (star = 0; star < length; star++) {
                                                            numbStars.push(
                                                                <Icon
                                                                    key={star}
                                                                    name='ios-star'
                                                                />
                                                            )
                                                        }

                                                        if (length < 5) {
                                                            let key = length;
                                                            for (i = 0; i < 5 - length; i++) {
                                                                numbStars.push(
                                                                    <Icon
                                                                        key={key++}
                                                                        name='ios-star-outline'
                                                                    />

                                                                )
                                                            }
                                                        }

                                                        return numbStars;

                                                    })(rating)
                                                }
                                            </View>
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

