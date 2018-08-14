import React, { Component } from 'react';
import {
    Platform,
    Dimensions,
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView,
    TouchableOpacity,
    Modal,
} from 'react-native';
import { Button, Icon } from 'native-base';
import { observer, inject } from 'mobx-react/native';
import ContainerComponent from '../components/container.component';
import variables from '../variables/index.variables';
import HeaderDetails from '../components/header.details';
import FooterDetails from '../components/footer.details';


@inject('databaseStore')
@inject('navigatorStore')
@observer
export default class DetailScreen extends Component {

    constructor(props) {
        super(props);
        // console.log(`main.screen.js constructor()`);
    }

    state = {
        isImageBoxOpened: false,
    };

    componentDidMount() {
        // debug purpose
        // console.log(`main.screen.js componentDidMount()::`);
    }

    toggledImages(images) {
        const { paddingHorizontal, paddingVertical } = variables.globalVariables;

        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.isImageBoxOpened}
                onRequestClose={() => { alert('Modal has been closed.'); }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        paddingTop: Platform.OS === 'ios' ? paddingVertical : 0,
                        paddingBottom: paddingHorizontal / 2,
                        paddingHorizontal: paddingHorizontal,
                    }}
                >
                    <View>
                        <Button
                            transparent
                            onPress={() => {
                                this.setState({ isImageBoxOpened: false });
                            }}
                        >
                            <Icon
                                name='ios-close'
                                style={{color:'#000'}}
                            />
                        </Button>
                    </View>
                </View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    {
                        images.map((image, i) => {
                            return (
                                <View
                                    key={i}
                                    style={{
                                        marginTop: i == 0 ? 0 : paddingVertical / 2,
                                        marginBottom: i == images.length - 1 ? paddingVertical / 2 : 0,
                                        marginHorizontal: paddingHorizontal,
                                        paddingHorizontal: paddingHorizontal,
                                    }}
                                >
                                    <Image
                                        source={image.uri}
                                        style={{
                                            height: 226,
                                            width: 100 + '%',
                                        }}
                                    />
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </Modal>
        );
    }

    renderContent(item) {

        const { paddingHorizontal, paddingVertical } = variables.globalVariables;
        const { id, restaurant } = item;
        const { description, images, ratings, favorites, comments } = restaurant;

        return (
            <ScrollView>
                <View
                    style={{
                        backgroundColor: '#fff',
                        paddingVertical: paddingHorizontal,
                        paddingHorizontal: paddingHorizontal,
                        marginHorizontal: paddingHorizontal
                    }}
                >
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ isImageBoxOpened: true });
                            }}
                        >
                            <Image
                                source={images[id].uri}
                                style={{
                                    height: 226,
                                    width: null,
                                    borderRadius: 3,
                                }}
                            />
                        </TouchableOpacity>
                        {
                            this.toggledImages(images)
                        }
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: paddingHorizontal,
                        }}
                    >
                        <View>
                            <Text>
                                <Icon
                                    name='ios-star-outline'
                                    style={{
                                        fontSize: 25
                                    }}
                                />
                                {
                                    (ratings => {
                                        let stars = 0;
                                        ratings.map((rating, i) => {
                                            stars += rating.stars
                                        });

                                        return (stars / ratings.length).toFixed(1);

                                    })(ratings)
                                }
                            </Text>
                        </View>
                        <View>
                            <Text>
                                <Icon
                                    name='ios-heart-outline'
                                    style={{
                                        fontSize: 25
                                    }}
                                />
                                {
                                    favorites.length
                                }
                            </Text>
                        </View>
                        <View>
                            <Text>
                                <Icon
                                    name='ios-chatboxes-outline'
                                    style={{
                                        fontSize: 25
                                    }}
                                />
                                {
                                    comments.length
                                }
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text>
                            {
                                description
                            }
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }

    render() {

        const { paddingHorizontal, paddingVertical } = variables.globalVariables;
        const { params } = this.props.navigation.state;
        const item = params ? params.item : null;
        const { restaurant } = item;
        const width = Dimensions.get('window').width;

        return (
            <ContainerComponent
                coverColor='#fff'
            >
                <View
                    style={{
                        paddingHorizontal: paddingHorizontal,
                        paddingTop: Platform.OS === 'ios' ? paddingVertical : 0,
                        backgroundColor: '#fff',
                    }}
                >
                    <HeaderDetails
                        item={item}
                        title={restaurant.name}
                        previous='Main'
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        // paddingHorizontal: paddingHorizontal,
                        paddingVertical: paddingVertical / 2,
                        backgroundColor: '#f9f9f9',
                    }}
                >
                    {
                        this.renderContent(item)
                    }
                </View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        paddingHorizontal: paddingHorizontal,
                        paddingVertical: paddingVertical / 2,
                        width: width,
                        backgroundColor: '#fff',
                    }}
                >
                    <FooterDetails item={item} />
                </View>
            </ContainerComponent>
        )
    }
}