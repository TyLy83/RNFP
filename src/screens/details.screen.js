import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView,
    TouchableOpacity,
    Modal,
} from 'react-native';
import { observer, inject } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ContainerComponent from '../components/container.component';
import variables from '../variables/index.variables';
import HeaderBarComponent from '../components/headerbar.component';


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

    toggledImageBox(images) {
        const { paddingHorizontal, paddingVertical } = variables.globalVariables;

        return (
            <View
                style={{
                    paddingVertical: paddingVertical,
                    paddingHorizontal: paddingHorizontal,
                }}
            >
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.isImageBoxOpened}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            paddingVertical: paddingVertical,
                            paddingHorizontal: paddingHorizontal,
                        }}
                    >
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ isImageBoxOpened: false });
                                }}>
                                <Text>
                                    <Icon
                                        name='close'
                                        type='MaterialCommunityIcons'
                                        style={{
                                            fontSize: 20
                                        }}
                                    />
                                </Text>
                            </TouchableOpacity>
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
            </View>
        );
    }

    render() {

        const { paddingHorizontal, paddingVertical } = variables.globalVariables;
        const { params } = this.props.navigation.state;
        const key = params ? params.key : null;
        const { databaseStore, navigatorStore } = this.props;
        const data = databaseStore.details(key);
        const { id, restaurant } = data;
        const { name, description, images, ratings, favorites, comments } = restaurant;

        return (
            <ContainerComponent
                paddingHorizontal={paddingHorizontal}
                paddingVertical={paddingVertical}
                coverColor='#fff'
            >
                <HeaderBarComponent
                    left='menu'
                    right='close'
                    rightNavigator={navigatorStore.navigate}
                    rightParams='Main'
                    leftNavigator={navigatorStore.openDrawer}
                />
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={{
                        backgroundColor: '#fff'
                    }}
                >
                    <View
                        style={{
                            paddingVertical: paddingVertical / 4,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 23,
                                fontWeight: '600'
                            }}
                        >
                            {name}
                        </Text>
                    </View>
                    <View
                        style={{
                            paddingVertical: paddingVertical / 4,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ isImageBoxOpened: true })
                            }}
                        >
                            <Image
                                source={images[id].uri}
                                style={{
                                    height: 226,
                                    width: 100 + '%',
                                }}
                            />
                        </TouchableOpacity>
                        <View>{this.toggledImageBox(images)}</View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text>
                            <Icon
                                name='star-outline'
                                style={{
                                    fontSize: 18
                                }}
                            />
                            {
                                (ratings => {
                                    let length = ratings.length;
                                    let stars = 0;

                                    ratings.map((rating, i) => {
                                        stars += rating.stars
                                    });

                                    return (stars / length).toFixed(1)
                                })(ratings)
                            }
                        </Text>
                        <Text>
                            <Icon
                                name='comment-outline'
                                style={{
                                    fontSize: 18
                                }}
                            />
                            {comments.length}
                        </Text>
                        <Text>
                            <Icon
                                name='heart-outline'
                                style={{
                                    fontSize: 18
                                }}
                            />
                            {
                                (favorites => {
                                    return favorites.length;
                                })(favorites)
                            }
                        </Text>
                    </View>
                    <View
                        style={{
                            paddingVertical: paddingVertical / 4,
                        }}
                    >
                        <Text>{description}</Text>
                    </View>
                    <View
                        style={{
                            paddingVertical: paddingVertical / 4
                        }}
                    >
                        <View
                            style={styles.rowStyle}
                        >
                            <TouchableOpacity
                                style={styles.buttonStyle}
                            >
                                <Text>
                                    <Icon
                                        name='book-open'
                                        style={{
                                            fontSize: 20
                                        }}
                                    />
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonStyle}
                            >
                                <Text>
                                    <Icon
                                        name='compass-outline'
                                        style={{
                                            fontSize: 20
                                        }}
                                    />
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.buttonStyle}
                            >
                                <Text>
                                    <Icon
                                        name='message-outline'
                                        style={{
                                            fontSize: 20
                                        }}
                                    />
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonStyle}
                            >
                                <Text>
                                    <Icon
                                        name='phone'
                                        style={{
                                            fontSize: 20
                                        }}
                                    />
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ContainerComponent>
        )
    }
}

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonStyle: {
        height: 50,
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderColor: '#fff',
        borderWidth: 2,
    }
})