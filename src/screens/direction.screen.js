import React, { Component } from 'react';
import { Platform, Dimensions, ScrollView, View, Text, Image } from 'react-native';
import { Button, Icon } from 'native-base';
import { observer, inject } from 'mobx-react/native';
import MapView, { Marker, ProviderPropType, PROVIDER_GOOGLE } from 'react-native-maps';
import ContainerComponent from '../components/container.component';
import variables from '../variables/index.variables';
import HeaderDetails from '../components/header.details';
import FooterDetails from '../components/footer.details';


const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

@inject('databaseStore')
@inject('navigatorStore')
@observer
export default class DirectionScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
        };
    }

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
                        paddingTop: Platform.OS === 'ios' ? paddingVertical : 0,
                        backgroundColor: '#fff',
                    }}
                >
                    <HeaderDetails
                        title='Direction'
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
                                <Text>Map</Text>
                            </View>
                            <View>
                                <MapView
                                    provider={PROVIDER_GOOGLE}
                                    style={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    initialRegion={{
                                        latitude: 39.7392,
                                        longitude: -104.9903,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421,
                                    }}
                                >

                                </MapView>
                            </View>
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
                        title='Direction'
                        item={item}
                    />
                </View>
            </ContainerComponent>
        )
    }
}

