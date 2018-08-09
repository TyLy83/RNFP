import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { observer, inject } from 'mobx-react/native';
import ContainerComponent from '../components/container.component';
import variables from '../variables/index.variables';
import HeaderBarComponent from '../components/headerbar.component';
import ListItemComponent from '../components/listitem.component';


@inject('navigatorStore')
@inject('databaseStore')
//@inject('variables')
@observer
export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        // console.log(`main.screen.js constructor()`);
    }

    componentDidMount() {
        // debug purpose
        // console.log(`main.screen.js componentDidMount()::`);
    }

    displayList(list) {
        
        const { paddingHorizontal, paddingVertical }  = variables.globalVariables;
        const { navigatorStore } = this.props;

        return (
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{
                    marginVertical: 10,
                }}
            >
                {
                    list.map((item, i) => {

                        const { id, restaurant } = item;
                        const { name, description, images, ratings, favorites, comments } = restaurant;
                        const { uri } = images[i];
 
                        return (
                            <ListItemComponent 
                                key={i}
                                id={id}
                                name={name}
                                description={description}
                                paddingVertical={ paddingVertical/2 }
                                handleClick={ navigatorStore.navigate }
                                imageSource={uri}
                                ratings= {ratings}
                                favorites={favorites}
                                comments={comments}                        
                            />
                        )
                    })
                }
            </ScrollView>
        )
    }

    render() {
        
        const { navigatorStore, databaseStore } = this.props;
        const { paddingHorizontal, paddingVertical }  = variables.globalVariables;
        const list = databaseStore.list;

        return (
            <ContainerComponent
                paddingHorizontal={paddingHorizontal}
                paddingVertical={paddingVertical}
                backgroundColor='#fff'
            >
                <HeaderBarComponent
                    title='Main'
                    left='menu'
                    leftNavigator={navigatorStore.openDrawer}
                />
                <View>
                    {
                        this.displayList(list)
                    }
                </View>

            </ContainerComponent>
        )
    }
}
