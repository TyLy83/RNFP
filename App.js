
import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import stores from './src/stores/index.store';
import NavigatorComponent from './src/components/navigator.component';


export default class App extends Component {

  componentDidMount() {
    // for debug purpose
    // console.log(`App.js : componentDidMount()`)
  }

  render() {
    return (
      <Provider {...stores}>
        <NavigatorComponent navigatorStore={stores.navigatorStore} />
      </Provider>
      
    );
  }
}


