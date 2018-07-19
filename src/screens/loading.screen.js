import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

import { Container, Header, Content, Spinner } from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import BgfullComponent from '../components/bgfull.component';
import BgimageComponent from '../components/bgimage.component';

export default class LoagingScreen extends Component {

    componentDidMount() {
        SplashScreen.hide();
        console.log(`loading.screen.js ::: componentDidMount()`)
    }

    render() {
        return (
            <BgimageComponent>
                <StatusBar 
                    barStyle='light-content'
                    backgroundColor={colors.backgroundColor}
                    hidden={true}
                />    
                <View style={styles.spinnerWrapper}>
                    <Text style={styles.indicatorTitle} >Loading</Text>
                    <Spinner color={colors.backgroundColor} />
                </View>
            </BgimageComponent>
        )
    }
}

const colors = {
    backgroundColor: 'green'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    spinnerWrapper: {
        backgroundColor: 'white',
        borderRadius: 3,
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
    },
    indicatorTitle: {
        color: 'green'
    }

})