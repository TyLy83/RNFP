import React, { Component } from 'react';
import {
    Platform,
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
                    styles.container,
                    {
                        backgroundColor: this.props.coverColor
                    }
                ]}
            >
                <ImageBackground
                    source={this.props.imageUrl}
                    style={[
                        styles.imageBackground,
                        {
                            backgroundColor: this.props.coverColor
                        }
                    ]}
                >
                    <View
                        style={[
                            styles.container,
                            {
                                backgroundColor: this.props.coverColor,
                            }
                        ]}
                    >
                        <StatusBar
                            backgroundColor={this.props.coverColor}
                            hidden={this.starBarHidden ? true : false}
                        />
                        <SafeAreaView
                            style={[styles.container]}
                        >
                            <View
                                style={[styles.contentWrapper]}
                            >
                                {this.props.children}
                            </View>
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
    contentWrapper: {
        flex: 1,
        paddingTop: Platform.OS == 'ios'? 32 : 0,
    },
});

