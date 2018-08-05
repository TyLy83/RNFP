import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    ImageBackground,
    SafeAreaView
} from 'react-native';

export default class ContainerComponent extends Component {
    render() {
        return (
            <View
                style={[
                    styles.container
                ]}
            >
                <ImageBackground
                    source={this.props.imageUrl}
                    style={[
                        styles.container,
                    ]}
                >
                    <View
                        style={[
                            styles.container,
                            {
                                backgroundColor: this.props.coverColor,
                                paddingHorizontal: this.props.paddingHorizontal,
                                paddingVertical: this.props.paddingVertical,
                            }
                        ]}
                    >
                        <SafeAreaView
                            style={
                                styles.container
                            }
                        >
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
    },
});

