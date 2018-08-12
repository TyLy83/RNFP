import React, { Component } from 'react';
import { Dimensions, ScrollView, View, Text } from 'react-native';
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
                        paddingTop: paddingVertical,
                        paddingBottom: paddingVertical / 2,
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
                        style={{
                            marginVertical: paddingVertical / 2,
                        }}
                    >
                        {
                            comments.map((comment, i) => {
                                return (
                                    <View
                                        key={i}
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#fff',
                                            marginVertical: paddingHorizontal / 2,
                                            paddingVertical: paddingHorizontal,
                                            paddingHorizontal: paddingHorizontal

                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                paddingVertical: paddingHorizontal / 2
                                            }}
                                        >
                                            {comment.message}
                                        </Text>
                                        <Text
                                            style={{
                                                paddingVertical: paddingHorizontal / 2
                                            }}
                                        >
                                            {comment.user.fullName}
                                        </Text>
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

