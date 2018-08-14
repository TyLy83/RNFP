import React, { Component } from 'react';
import { Platform, Dimensions, ScrollView, View, Text, Image } from 'react-native';
import { Icon, Button } from 'native-base';
import { observer, inject } from 'mobx-react/native';
import ContainerComponent from '../components/container.component';
import variables from '../variables/index.variables';
import HeaderDetails from '../components/header.details';
import FooterDetails from '../components/footer.details';


@inject('databaseStore')
@inject('navigatorStore')
@observer
export default class CommentScreen extends Component {

    render() {

        const { paddingHorizontal, paddingVertical } = variables.globalVariables;
        const { params } = this.props.navigation.state;
        const { item } = params;
        const { restaurant } = item;
        const { comments } = restaurant;
        const width = Dimensions.get('window').width;

        return (
            <ContainerComponent
                coverColor='#fff'
            >
                <View
                    style={{
                        paddingHorizontal: paddingHorizontal,
                        paddingTop: Platform.OS === 'ios' ? paddingVertical : 0,
                        backgroundColor: '#fff',
                    }}
                >
                    <HeaderDetails
                        item={item}
                        title={restaurant.name}
                        previous='Details'
                    />
                </View>
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
                                comments.map((comment, i) => {
                                    return (
                                        <View
                                            key={i}
                                            style={{
                                                marginVertical: paddingHorizontal,
                                                marginHorizontal: paddingHorizontal,
                                                paddingVertical: paddingHorizontal,
                                                paddingHorizontal: paddingHorizontal,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: '#fff',
                                            }}
                                        >
                                            <Image
                                                source={comment.user.pictureUri}
                                                style={{
                                                    height: 60,
                                                    width: 60,
                                                    borderRadius: 30,
                                                }}
                                            />
                                            <Text
                                                style={{
                                                    paddingVertical: paddingHorizontal / 2
                                                }}
                                            >
                                                {comment.user.fullName}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 20,
                                                    fontWeight: '700',
                                                    paddingVertical: paddingHorizontal / 2
                                                }}
                                            >
                                                {comment.message}
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
                        title='Comments'
                        item={item}
                    />
                </View>
            </ContainerComponent>
        )
    }
}

