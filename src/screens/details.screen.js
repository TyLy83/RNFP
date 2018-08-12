import React, { Component } from 'react';
import {
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
                        paddingTop: paddingVertical,
                        paddingBottom: paddingVertical / 2,
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
                                name='close'
                                type='MaterialCommunityIcons'
                                style={{
                                    color: '#000',
                                    marginLeft: 0,
                                    marginRight: 0,
                                }}
                            />
                        </Button>
                    </View>
                </View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={{
                        // paddingVertical: paddingVertical,
                        paddingHorizontal: paddingHorizontal,
                    }}
                >
                    {
                        images.map((image, i) => {
                            return (
                                <View
                                    key={i}
                                    style={{
                                        marginTop: i == 0 ? 0 : paddingVertical / 2,
                                        marginBottom: i == images.length - 1 ? paddingVertical / 2 : 0,
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
                        paddingVertical: paddingVertical / 2,
                        paddingHorizontal: paddingHorizontal,
                        backgroundColor: '#fff',
                    }}
                >
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
                        paddingVertical: paddingVertical / 4,
                        paddingHorizontal: paddingHorizontal,
                        backgroundColor: '#fff'
                    }}
                >
                    <View>
                        <Text>
                            <Icon
                                name='star-outline'
                                type='MaterialCommunityIcons'
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
                                name='heart-outline'
                                type='MaterialCommunityIcons'
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
                                name='message-outline'
                                type='MaterialCommunityIcons'
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
                <View
                    style={{
                        paddingTo: paddingVertical / 4,
                        paddingBottom: paddingVertical,
                        paddingHorizontal: paddingHorizontal,
                        backgroundColor: '#fff',
                    }}
                >
                    <Text>
                        {
                            description
                        }
                    </Text>
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
                        paddingTop: paddingVertical,
                        paddingBottom: paddingVertical / 2,
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