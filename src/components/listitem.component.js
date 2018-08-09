import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { observer, inject } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


@inject('navigatorStore')
@observer
export default class ListItemComponent extends Component {

    getRatings(rates) {

        let length = rates.length;
        let stars = 0;

        rates.map((rate, id) => {
            stars += rate.stars
        });

        return (stars / length).toFixed(1);
    }

    render() {

        const {
            id,
            name,
            paddingVertical,
            handleClick,
            imageSource,
            ratings,
            favorites,
            comments,
        } = this.props;

        return (
            <View
                style={{
                    paddingVertical: paddingVertical
                }}
            >
                <TouchableOpacity
                    onPress={() => handleClick('Details', {
                        'key': id
                    })}
                >
                    <Image
                        source={imageSource}
                        style={{
                            height: 226,
                            width: 100 + '%'
                        }}
                    />
                    <Text
                        style={{
                            paddingVertical: 20,
                            fontSize: 20,
                            fontWeight: '500'
                        }}
                    >
                        {name}
                    </Text>
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
                            {this.getRatings(ratings)}
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
                            {favorites.length}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}