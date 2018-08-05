import { observable, action } from 'mobx';

export default class DatabaseStore {

    constructor(){
        console.log(`DatabaseStore constructor()`)
    }

    @observable list = [
        {
            name: `Architecture Cafe`,
            imgUrl: require('../../assets/restaurants/item_01.jpg'),
            shortDesc: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...`,
            description: ``,
            images:[
                require('../../assets/restaurants/item_01.jpg'),
                require('../../assets/restaurants/item_02.jpg'),
                require('../../assets/restaurants/item_03.jpg'),
                require('../../assets/restaurants/item_04.jpg'),
                require('../../assets/restaurants/item_05.jpg'),
                require('../../assets/restaurants/item_06.jpg'),
            ]
        },
        {
            name: `Foods & Lunches Cafe`,
            imgUrl: require('../../assets/restaurants/item_02.jpg'),
            shortDesc: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...`,
            description: ``,
            images:[
                require('../../assets/restaurants/item_01.jpg'),
                require('../../assets/restaurants/item_02.jpg'),
                require('../../assets/restaurants/item_03.jpg'),
                require('../../assets/restaurants/item_04.jpg'),
                require('../../assets/restaurants/item_05.jpg'),
                require('../../assets/restaurants/item_06.jpg'),
            ]
        },
        {
            name: `City Life Bar`,
            imgUrl: require('../../assets/restaurants/item_03.jpg'),
            shortDesc: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...`,
            description: ``,
            images:[
                require('../../assets/restaurants/item_01.jpg'),
                require('../../assets/restaurants/item_02.jpg'),
                require('../../assets/restaurants/item_03.jpg'),
                require('../../assets/restaurants/item_04.jpg'),
                require('../../assets/restaurants/item_05.jpg'),
                require('../../assets/restaurants/item_06.jpg'),
            ]
        },
        {
            name: `Tavern Restaurant`,
            imgUrl: require('../../assets/restaurants/item_04.jpg'),
            shortDesc: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...`,
            description: ``,
            images:[
                require('../../assets/restaurants/item_01.jpg'),
                require('../../assets/restaurants/item_02.jpg'),
                require('../../assets/restaurants/item_03.jpg'),
                require('../../assets/restaurants/item_04.jpg'),
                require('../../assets/restaurants/item_05.jpg'),
                require('../../assets/restaurants/item_06.jpg'),
            ]
        },
        {
            name: `Teacup Tee Cafe`,
            imgUrl: require('../../assets/restaurants/item_05.jpg'),
            shortDesc: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...`,
            description: ``,
            images:[
                require('../../assets/restaurants/item_01.jpg'),
                require('../../assets/restaurants/item_02.jpg'),
                require('../../assets/restaurants/item_03.jpg'),
                require('../../assets/restaurants/item_04.jpg'),
                require('../../assets/restaurants/item_05.jpg'),
                require('../../assets/restaurants/item_06.jpg'),
            ]
        },
        {
            name: `Chicken Salad Cafe`,
            imgUrl: require('../../assets/restaurants/item_06.jpg'),
            shortDesc: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...`,
            description: ``,
            images:[
                require('../../assets/restaurants/item_01.jpg'),
                require('../../assets/restaurants/item_02.jpg'),
                require('../../assets/restaurants/item_03.jpg'),
                require('../../assets/restaurants/item_04.jpg'),
                require('../../assets/restaurants/item_05.jpg'),
                require('../../assets/restaurants/item_06.jpg'),
            ]
        },
        {
            name: `Champagne Cutlery Bar`,
            imgUrl: require('../../assets/restaurants/item_03.jpg'),
            shortDesc: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...`,
            description: ``,
            images:[
                require('../../assets/restaurants/item_01.jpg'),
                require('../../assets/restaurants/item_02.jpg'),
                require('../../assets/restaurants/item_03.jpg'),
                require('../../assets/restaurants/item_04.jpg'),
                require('../../assets/restaurants/item_05.jpg'),
                require('../../assets/restaurants/item_06.jpg'),
            ]
        },

    ];

    @action details(key) {
        return this.list[key];
    }

}