import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import BgimageComponent from '../components/bgimage.component';
import { Item, Input, Icon, Button, Text, H3 } from 'native-base';


export default class ForgotpwdScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { focus: false }
  }

  componentDidMount() {
    //debug purpose
    console.log(`forgotpwd.screen.js ::: componentDidMount()`);
  }

  render() {
    return (
      <BgimageComponent
        imageUrl={require('../../assets/bg_images/bg_image_1.jpg')}
        coverColor="rgba(79,109,122, 0.8)"
      >
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
          <View style={styles.logoWrap}>
            <View style={styles.logo}>
              <Image
                source={require('../../assets/icons/icon.png')}
                style={styles.logoImage}
              />
            </View>
            <H3 style={styles.appTitle}>BUKIN</H3>
          </View>
          <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <Text>Forgot password</Text>
          </View>
        </KeyboardAvoidingView>
      </BgimageComponent>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  logoWrap: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#fff'
  },
  logoImage: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  appTitle: {
    color: '#fff',
    paddingVertical: 15,
    fontWeight: '900'
  },
  formWrap: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  loginForm: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,

  },
  formInput: {
    paddingHorizontal: 6,
    backgroundColor: 'rgba(255,255,255, 0.3)',
    borderColor: 'transparent',
    marginVertical: 10,
    borderRadius: 3
  },
  iconStyle: {
    color: 'rgba(255,255,255, 1)',
  },
  buttonStyle: {
    backgroundColor: 'rgba(79,109,122, 1)',
    marginVertical: 10,
    borderRadius: 3
  },
  footer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 15,
  },
  footerTextStyle: {
    color: '#fff'
  }
});