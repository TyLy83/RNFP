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
import { Icon } from 'native-base';
import globalVariables from '../variables/global.variables';


@inject('navigatorStore')
@inject('databaseStore')
@observer
export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        // console.log(`main.screen.js constructor()`);
    }

    componentDidMount() {
        // debug purpose
        console.log(`main.screen.js componentDidMount()::`);
    }

    displayList(list) {
        console.log(`list length ${list.length}`);
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
                        return (
                            <TouchableOpacity
                                key={i}
                                onPress={() => this.props.navigatorStore.navigate('Details', {
                                    key: i,
                                    otherParam: `${item.name}`,
                                })}
                            >
                                <Text
                                    style={{
                                        fontSize: 23,
                                        fontWeight: '700',
                                        marginVertical: 10,
                                        color: '#000'
                                    }}
                                >
                                    {item.name}
                                </Text>
                                <Image
                                    source={item.imgUrl}
                                    style={{
                                        height: 226,
                                        width: 350
                                    }}
                                    onPress={() => alert(`Key:: ${i}`)}
                                />
                                <Text
                                    style={{
                                        marginVertical: 10,
                                        color: '#000'
                                    }}
                                >
                                    {item.shortDesc}
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Text
                                        style={{
                                            justifyContent: 'center',
                                            fontSize: 12,
                                            color: '#333'
                                        }}
                                    >
                                        <Icon
                                            name='heart'
                                            type='MaterialCommunityIcons'
                                            style={{
                                                fontSize: 12
                                            }}
                                        /> 5
                                    </Text>
                                    <Text
                                        style={{
                                            justifyContent: 'center',
                                            fontSize: 12,
                                            color: '#333'
                                        }}
                                    >
                                        <Icon
                                            name='star'
                                            type='MaterialCommunityIcons'
                                            style={{
                                                fontSize: 12
                                            }}
                                        /> 4.7
                                    </Text>
                                    <Text
                                        style={{
                                            justifyContent: 'center',
                                            fontSize: 12,
                                            color: '#333'
                                        }}
                                    >
                                        <Icon
                                            name='comment'
                                            type='MaterialCommunityIcons'
                                            style={{
                                                fontSize: 12
                                            }}
                                        /> 2
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        )
    }

    render() {
        return (
            <ContainerComponent
                paddingHorizontal={globalVariables.paddingHorizontal}
                paddingVertical={globalVariables.paddingVertical}
                backgroundColor='#fff'
            >
                <View>
                    <Icon
                        name='menu'
                        type='MaterialCommunityIcons'
                        onPress={() => this.props.navigation.openDrawer()}
                    />
                </View>
                <View>
                    {
                        this.displayList(this.props.databaseStore.list)
                    }
                </View>

            </ContainerComponent>
        )
    }
}
