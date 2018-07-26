import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/login.screen';
import SignupScreen from '../screens/signup.screen';
import ForgotpwdScreen from '../screens/forgotpwd.screen';


const Login = {
    screen: LoginScreen,
    navigationOptions: {
        header: null
    }
}

const Signup = {
    screen: SignupScreen,
    navigationOptions: {
        header: null
    }
}

const Forgot = {
    screen: ForgotpwdScreen,
    navigationOptions: {
        header: null
    }
}


const stackConfig = {
    Login: Login,
    Signup: Signup,
    Forgot: Forgot
}

const routeConfig = {
    initialRouteName: 'Login'
}

export default createStackNavigator(stackConfig, routeConfig);