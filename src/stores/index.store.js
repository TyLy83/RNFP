import NavigatorStore from './navigator.store';
import AuthenticatorStore from './authenticator.store';
import DatabaseStore from './database.store';
import GeocoderStore from './geocoder.store';

export default {
    navigatorStore : new NavigatorStore(),
    authenticatorStore: new AuthenticatorStore(),
    databaseStore: new DatabaseStore(),
    geocoderStore: new GeocoderStore(),
}