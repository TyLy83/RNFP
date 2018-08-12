import React, { Component } from 'react';
import { Dimensions, ScrollView, View, Text } from 'react-native';
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

    render() {

        const { paddingHorizontal, paddingVertical } = variables.globalVariables;
        const { params } = this.props.navigation.state;
        const item = params ? params.item : null;
        const { restaurant } = item;
        const { ratings } = restaurant;
        const width = Dimensions.get('window').width;

        return (
            <ContainerComponent
                coverColor='#fff'
            >
                <View
                    style={{
                        paddingHorizontal: paddingHorizontal,
                        paddingTop: paddingVertical,
                        paddingBottom: paddingVertical/2,
                        backgroundColor: '#fff',
                    }}
                >
                    <HeaderDetails
                        title={restaurant.name}
                        item={item}
                        previous='Details'
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#f9f9f9',
                    }}
                >
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        style={{
                            marginVertical: paddingHorizontal,
                        }}
                    >
                        {
                            ratings.map((rating, i) => {
                                return (
                                    <View
                                        style={{
                                            flexDirection: 'column',
                                            paddingVertical: paddingVertical / 2,
                                            paddingHorizontal: paddingHorizontal,
                                            marginVertical: paddingHorizontal / 2,
                                            backgroundColor: '#fff'
                                        }}
                                    >
                                        <View
                                            style={{
                                                paddingVertical: paddingVertical / 2,
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 18
                                                }}
                                            >
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
                                                            <Text
                                                                key={star}
                                                            >
                                                                <Icon
                                                                    name='star'
                                                                    type='MaterialCommunityIcons'
                                                                    style={{fontSize: 45}}
                                                                />
                                                            </Text>
                                                        )
                                                    }

                                                    if (length < 5) {
                                                        let key = length;
                                                        for (i = 0; i < 5 - length; i++) {
                                                            numbStars.push(
                                                                <Text
                                                                    key={key++}
                                                                >
                                                                    <Icon
                                                                        name='star-outline'
                                                                        type='MaterialCommunityIcons'
                                                                        style={{fontSize: 45}}
                                                                    />
                                                                </Text>
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
                    </ScrollView>
                </View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        paddingHorizontal: paddingHorizontal,
                        paddingVertical: paddingVertical / 2,
                        width: width,
                        backgroundColor:'#fff',
                    }}
                >
                    <FooterDetails
                        title='Ratings'
                        item={item}
                    />
                </View>
            </ContainerComponent>
        )
    }
}

