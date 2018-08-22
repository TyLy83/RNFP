import React, { Component } from 'react';
import { Platform, Dimensions, StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { Icon, Button } from 'native-base';
import { observer, inject } from 'mobx-react/native';
import ContainerComponent from '../components/container.component';
import variables from '../variables/index.variables';
import HeaderDetails from '../components/header.details';

const { width } = Dimensions.get('window');
const { globalVariables } = variables;
const { paddingHorizontal, paddingVertical } = globalVariables;

@inject('databaseStore')
@inject('navigatorStore')
@observer
export default class CommentScreen extends Component {

    render() {

        const { databaseStore } = this.props;
        const item = databaseStore.item
        const { restaurant } = item;
        const { comments } = restaurant;

        return (
            <ContainerComponent
                coverColor='#fff'
            >
                <HeaderDetails
                    item={item}
                    title='Comments'
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
                                paddingBottom: paddingVertical,
                            }}
                        >
                            {
                                comments.map((comment, i) => {
                                    return (
                                        <View
                                            key={i}
                                            style={ styles.comment }
                                        >
                                            <Image
                                                source={ comment.user.pictureUri }
                                                style={ styles.avatar }
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
            </ContainerComponent>
        )
    }
}

const styles = StyleSheet.create({
    comment: {
        marginVertical: paddingHorizontal,
        marginHorizontal: paddingHorizontal,
        paddingVertical: paddingHorizontal,
        paddingHorizontal: paddingHorizontal,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 30,
    }
})

