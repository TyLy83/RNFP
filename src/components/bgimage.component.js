import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    ImageBackground,
    Image
} from 'react-native';


export default class BgimageComponent extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <ImageBackground 
                    source={ backgroundImage.path }
                    style={[styles.container, styles.imageBackground]}
                >
                    {this.props.children}
                </ImageBackground>
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
    },
    imageBackground: { 
        flex: 1, 
        width: '100%', 
        height: '100%' 
    }
});

const backgroundImage = {
    path: require('../../assets/bg_images/bg_image_1.jpg')
}