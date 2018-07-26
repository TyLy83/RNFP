import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar
} from 'react-native';


export default class BackgroundComponent extends Component {

    render() {
        return (
            <View style={[styles.container,{ backgroundColor : this.props.backgroundColor }]}>
                <View>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor={ this.props.backgroundColor }
                        hidde={true}
                    />
                </View>
                <View>
                    {this.props.children}
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
    },
})