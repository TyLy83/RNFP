import Geocoder from 'react-native-geocoder';
import { observable, action } from 'mobx';

Geocoder.fallbackToGoogle("AIzaSyCcoCNw7etF7x1MtRakDlqzo_C7d49OAns");

export default class GeocoderStore {

    @observable position = {}

    @action getPosition(address) {

        console.log('execute---getPosition(address)')
        Geocoder.geocodeAddress(address).then(res => {
            console.log('getting result')
            if (res) {
                console.log('assign the value');
                this.position = res[0];
            }
                
        }).catch(error => console.log(error));

    }

}
