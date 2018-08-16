import React, { Component } from 'react';
import NavigatorService from '../navigators/service.navigator';
import AppNavigator from '../navigators/app.navigator';


export default class NavigatorComponent extends Component {
    render() {        
        return (
            <AppNavigator
                ref={navigatorRef => NavigatorService.setTopLevelNavigator(navigatorRef)}
            />
        );
    }

}

