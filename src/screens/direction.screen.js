import React, { Component } from 'react';
import { Platform, Dimensions, StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { Button, Icon, StyleProvider } from 'native-base';
import { observer, inject } from 'mobx-react/native';
import MapView, { Marker, ProviderPropType, PROVIDER_GOOGLE } from 'react-native-maps';
import getDirections from 'react-native-google-maps-directions'
import ContainerComponent from '../components/container.component';
import variables from '../variables/index.variables';
import HeaderDetails from '../components/header.details';
import FooterDetails from '../components/footer.details';


const { width, height } = Dimensions.get('window');
const { paddingVertical, paddingHorizontal } = variables.globalVariables;
const { iconStyle } = variables.globalStyles;

const ASPECT_RATIO = width / (height - 160);
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


@inject('databaseStore')
@inject('navigatorStore')
@inject('geocoderStore')
@observer
export default class DirectionScreen extends Component {

    constructor(props) {
        super(props);
    }

    regionFrom(lat, lon, distance) {
        distance = distance / 2
        const circumference = 40075
        const oneDegreeOfLatitudeInMeters = 111.32 * 1000
        const angularDistance = distance / circumference

        const latitudeDelta = distance / oneDegreeOfLatitudeInMeters
        const longitudeDelta = Math.abs(Math.atan2(
            Math.sin(angularDistance) * Math.cos(lat),
            Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)))

        return result = {
            latitude: lat,
            longitude: lon,
            latitudeDelta,
            longitudeDelta,
        }
    }

    getPosition(address) {
        const { geocoderStore } = this.props;
        geocoderStore.getPosition(address);
    }

    getDirection() {
        const data = {
            source: null,
            destination: {
                latitude: -36.8567804,
                longitude: 174.7622526,
            },
            params: [
                {
                    key: "travelmode",
                    value: "driving"        // may be "walking", "bicycling" or "transit" as well
                },
                {
                    key: "dir_action",
                    value: "navigate"       // this instantly initializes navigation using the given travel mode 
                }
            ]
        }

        getDirections(data)
    }

    render() {

        const { params } = this.props.navigation.state;
        const item = this.props.databaseStore.item;
        const { restaurant } = item;
        const address = `${restaurant.location.strNumb} ${restaurant.location.strName}, ${restaurant.location.suburb}, ${restaurant.location.postalCode}, ${restaurant.location.country}`;

        return (
            <ContainerComponent
                coverColor='#fff'
            >
                <HeaderDetails
                    title='Direction'
                    item={item}
                    backgroundColor='#fff'
                    previous='Details'
                />
                <View
                    style={styles.mapWrapper}
                >
                    <View
                        style={styles.addressStyle}
                    >
                        <Text>{address}</Text>
                    </View>
                    <View
                        style={ styles.navigateButton }
                    >
                        <Button
                            transparent
                            onPress={() => this.getDirection()}
                        >
                            <Icon
                                name='ios-compass-outline'
                                style={iconStyle}
                            />
                        </Button>
                    </View>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: -36.8567804,
                            longitude: 174.7622526,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA,
                        }}
                    >
                        <MapView.Marker
                            coordinate={{
                                latitude: -36.8567804,
                                longitude: 174.7622526,
                            }}
                            title={restaurant.name}
                            description="500 Queen Street, Auckland 1010, New Zealand"
                        />
                    </MapView>
                </View>
            </ContainerComponent>
        )
    }
}

const styles = StyleSheet.create({
    mapWrapper: {
        position: 'relative',
        paddingHorizontal: paddingHorizontal,
        height:  height - 49.9,
    },
    map: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: width,
        height:  height - 49.9,
    },
    addressStyle: {
        position: 'absolute',
        top: paddingHorizontal,
        left: paddingHorizontal,
        width: width - paddingHorizontal * 2,
        backgroundColor: '#fff',
        paddingHorizontal: paddingHorizontal,
        paddingVertical: paddingHorizontal,
        zIndex: 1,
        flexDirection: 'row'
    },
    navigateButton: {
        position: 'absolute',
        right: paddingHorizontal,
        bottom: 69.9,
        zIndex: 1,
        backgroundColor: '#fff'
    }
})