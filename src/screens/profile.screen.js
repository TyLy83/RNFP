import React, { Component } from 'react';
import { View } from 'react-native';
import ContainerComponent from '../components/container.component';
import { Icon } from 'native-base';
import globalVariables from '../variables/global.variables';


export default class ProfileScreen extends Component {

    render() {
        return (
            <ContainerComponent
                imageUrl={ require('../../assets/bg_images/bg_image_1.jpg')}
                paddingHorizontal={globalVariables.paddingHorizontal}
                paddingVertical={globalVariables.paddingVertical}
                coverColor='rgba(255,255,255,0.3)'
            >
                <View>
                    <Icon
                        name='menu'
                        type='MaterialCommunityIcons'
                        onPress={
                            ()=> this.props.navigation.openDrawer()
                        }
                    />
                </View>
            </ContainerComponent>
        )
    }
}