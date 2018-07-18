import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native';

import { Container, Header, Content, Spinner } from 'native-base';
import SplashScreen from 'react-native-splash-screen';

export default class LoagingScreen extends Component {

    componentDidMount() {
        SplashScreen.hide();
        console.log(`loading.screen.js ::: componentDidMount()`)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.spinnerWrapper}>
                    <Text style={styles.indicatorTitle} >Loading</Text>
                    <Spinner color='green' />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    spinnerWrapper: {
        backgroundColor: 'white',
        borderRadius: 3,
        paddingRight: 20,
        paddingLeft: 20,
    },
    indicatorTitle: {
        color: 'green'
    }
    
})