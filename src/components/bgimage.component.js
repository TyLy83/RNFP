import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    ImageBackground,
} from 'react-native';

export default class BgimageComponent extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='transparent'
                    hidden={true}
                />
                <ImageBackground
                    source={ this.props.imageUrl }
                    style={[styles.container, styles.imageBackground]}
                >
                    <View style={[styles.contentWrap, { backgroundColor: this.props.coverColor }]}>{this.props.children}</View>
                </ImageBackground>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    contentWrap: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});


const backgroundImage = {
    path: require('../../assets/bg_images/bg_image_1.jpg')
}