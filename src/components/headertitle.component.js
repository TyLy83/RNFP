import React,{ Component } from 'react';
import { View, Text } from 'react-native';


export default class HeaderTitleComponent extends Component {

    render(){
        return(
            <View>
                <Text
                    style={{
                        color: this.props.textColor,
                        fontSize: this.props.fontSize,
                        fontWeight: this.props.fontWeight,
                        paddingVertical: this.props.paddingVertical,
                        paddingHorizontal: this.props.paddingHorizontal,
                    }}
                >
                    { this.props.headerTitle }
                </Text>
            </View>
        )
    }

}
