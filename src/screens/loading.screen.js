import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

import { Spinner } from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import BgimageComponent from '../components/bgimage.component';
import { Observer, inject} from 'mobx-react/native';
import { observer } from '../../node_modules/mobx-react';


@inject('navigatorStore')
@observer
export default class LoadingScreen extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        SplashScreen.hide();
        // debugging only
        console.log(`loading.screen.js ::: componentDidMount()`);
        // switching to authNavigator
        setTimeout(() => {
            console.log(`switching to login.screen.js`);
            this.props.navigatorStore.navigate('AuthNavigator');
        }, 3000)
    }

    render() {
        return (
            <BgimageComponent
                imageUrl={require('../../assets/bg_images/bg_image_1.jpg')}
                coverColor="rgba(79,109,122, 0.8)"
            >
                <View style={styles.container}>
                    <View style={styles.spinnerWrapper}>
                        <Spinner color='#fff' />
                        <Text style={styles.indicatorTitle}>Loading</Text>
                    </View>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinnerWrapper: {
        backgroundColor: 'rgba(79,109,122, 0.8)',
        borderRadius: 3,
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
    },
    indicatorTitle: {
        color: '#fff'
    }

})