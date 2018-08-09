import React, { Component } from 'react';
import { View } from 'react-native';
import ContainerComponent from '../components/container.component';
import { observer, inject } from 'mobx-react/native';
import HeaderBarComponent from '../components/headerbar.component';
import globalVariables from '../variables/global.variables';


@inject('navigatorStore')
@observer
export default class ProfileScreen extends Component {

    render() {
        const { navigatorStore } = this.props;

        return (
            <ContainerComponent
                paddingHorizontal={globalVariables.paddingHorizontal}
                paddingVertical={globalVariables.paddingVertical}
                backgroudColor='red'
                coverColor='rgba(255,255,255,1)'
            >
                <HeaderBarComponent
                    left='menu'
                    title='Profile'
                    right='arrow-left'
                    leftNavigator={navigatorStore.openDrawer}
                    rightNavigator={navigatorStore.navigate}
                    rightParams='Main'
                />
            </ContainerComponent>
        )
    }
}