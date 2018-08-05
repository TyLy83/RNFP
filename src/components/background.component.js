import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    ImageBackground,
    SafeAreaView
} from 'react-native';

export default class BackgroundComponent extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='transparent'
                    hidden={true}
                />
                <ImageBackground
                    source={this.props.imageUrl}
                    style={[styles.container, styles.imageBackground]}
                >
                    <View style={[styles.contentWrap, { backgroundColor: this.props.coverColor }]}>
                        <SafeAreaView style={{flex:1}}>
                            {this.props.children}
                        </SafeAreaView>
                    </View>
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

