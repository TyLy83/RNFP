import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';


export default class HeaderBackButtonComponent extends Component {

    render() {
        return (
            <TouchableOpacity
                style={{
                    paddingHorizontal: this.props.paddingHorizontal
                }}
                onPress={() => this.props.navigation.navigate(this.props.returnTo)}
            >
                <Icon
                    name="arrow-left"
                    type="MaterialCommunityIcons"
                    style={{
                        fontSize: 24
                    }}
                />
            </TouchableOpacity>
        )
    }
}