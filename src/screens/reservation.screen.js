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
export default class ReservationScreen extends Component {

    render() {

        const { paddingHorizontal, paddingVertical } = variables.globalVariables;
        const { databaseStore } = this.props;
        const item = databaseStore.item
       
        return (
            <ContainerComponent
                coverColor='#fff'
            >
                <HeaderDetails
                    title='Reservation'
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
                            <View
                                style={{
                                    marginVertical: paddingHorizontal,
                                    marginHorizontal: paddingHorizontal,
                                    paddingVertical: paddingHorizontal,
                                    paddingHorizontal: paddingHorizontal,
                                    backgroundColor: '#fff'
                                }}
                            >
                                <Text>Reservation</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ContainerComponent>
        )
    }
}

