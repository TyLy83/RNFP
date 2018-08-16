import React, { Component } from 'react';
import { Platform, Dimensions, StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { Button, Icon, StyleProvider } from 'native-base';
import { observer, inject } from 'mobx-react/native';
import MapView, { Marker, ProviderPropType, PROVIDER_GOOGLE } from 'react-native-maps';
import ContainerComponent from '../components/container.component';
import variables from '../variables/index.variables';
import HeaderDetails from '../components/header.details';
import FooterDetails from '../components/footer.details';
// import styles from '../variables/style.variables';


const { width, height } = Dimensions.get('window');
const { paddingVertical, paddingHorizontal } = variables.globalVariables;

const ASPECT_RATIO = width / (height - 160);
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

@inject('databaseStore')
@inject('navigatorStore')
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

    render() {

        const { params } = this.props.navigation.state;
        const item = params ? params.item : null;
        const { restaurant } = item;

        return (
            <ContainerComponent
                coverColor='#fff'
            >
                <HeaderDetails
                    title='Direction'
                    item={item}
                    previous='Details'
                />
                <View
                    style={styles.mapWrapper}
                >
                    <View
                        style={styles.addressStyle}
                    >
                        <Text>500 Queen Street, Auckland 1010, New Zealand</Text>
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
                <View
                    style={[{
                        position: 'absolute',
                        bottom: 0,
                        width: width,
                        backgroundColor: '#fff'
                    }
                    ]}
                >
                    <FooterDetails
                        item={item}
                        backgroundColor='#fff'
                    />
                </View>
            </ContainerComponent>
        )
    }
}

const styles = StyleSheet.create({
    mapWrapper: {
        position: 'relative',
        paddingHorizontal: paddingHorizontal,
        height: height - 156,
    },
    map: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        height: height - 156,
        width: width,
        backgroundColor: 'red',
    },
    addressStyle: {
        position: 'absolute',
        top: paddingHorizontal,
        left: paddingHorizontal,
        width: width - paddingHorizontal * 2,
        backgroundColor: '#fff',
        paddingHorizontal: paddingHorizontal,
        paddingVertical: paddingHorizontal,
        zIndex: 1
    }
})