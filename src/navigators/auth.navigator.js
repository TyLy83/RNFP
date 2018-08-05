/* 
 * This navigator used for authentication process.
 * A new user can create login, create a new user account
 * or simply link their facebook and google account etc
 */
import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/login.screen';
import SignupScreen from '../screens/signup.screen';
import ForgotpwdScreen from '../screens/forgotpwd.screen';


// stack config obj
const authNavConfig = {
    Login : LoginScreen,
    SignUp: SignupScreen,
    Forgot: ForgotpwdScreen,
}

// route config obj
const authRouteConfig = {
    initialRouteName : 'Login',
    navigationOptions:({navigation})=> {
        return { header: null };
    }
}

const authNavigator = createStackNavigator(authNavConfig, authRouteConfig);

export default authNavigator;