import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	SafeAreaView,
	KeyboardAvoidingView,
	Image,
} from 'react-native';
import BgimageComponent from '../components/bgimage.component';
import { Item, Input, Icon, Button, Text, StyleProvider, h2, H3 } from 'native-base';
import { observer, inject } from 'mobx-react/native';


@inject('navigatorStore')
@inject('authenticatorStore')
@observer
export default class LoginScreen extends Component {

	constructor(props) {
		super(props);
		//this.state = { focus: false }
	}

	componentDidMount() {
		//debug purpose
		console.log(`login.screen.js ::: componentDidMount()`);
	}

	render() {
		const authenticatorStore = this.props.authenticatorStore;
		console.log(`authenticatorStore::${ JSON.stringify(authenticatorStore.user)}`)
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
					<View style={styles.formWrap}>
						<Item rounded style={styles.formInput}>
							<Icon name="person" style={styles.iconStyle} />
							<Input
								placeholder="Username"
								placeholderTextColor="#fff"
								keyboardType="email-address"
								autoCorrect={false}
								autoCapitalize="none"
								returnKeyType="next"
								onSubmitEditing={() => { this.PasswordInputRef._root.focus() }}
								style={{ color: '#fff' }}
								tintColor="#fff"
							/>
						</Item>
						<Item rounded style={styles.formInput}>
							<Icon name="lock" style={styles.iconStyle} />
							<Input
								ref={input => { this.PasswordInputRef = input }}
								placeholder="Password"
								placeholderTextColor="#fff"
								returnKeyType="go"
								autoCorrect={false}
								autoCapitalize="none"
								secureTextEntry={true}
								style={{ color: '#fff' }}
							/>
						</Item>
						<Button
							full style={styles.buttonStyle}
							//onPress={() => this.props.authenticatorStore.signIn('user1@gmail.com', 'User@123')}
							onPress={() => this.props.navigatorStore.navigate('MainNavigator',{
								user: authenticatorStore.user
							})}
						>
							<Text style={styles.buttonText}>SIGN IN</Text>
						</Button>
					</View>
					<View style={styles.footer}>
						<View style={{ flex: 1 }}>
							<Text
								style={styles.footerTextStyle}
								onPress={() => this.props.navigatorStore.navigate('Forgot')}
							>
								Forgot Password
              				</Text>
						</View>
						<View
							style={{ flex: 1, flexDirection: 'row' }}
						>
							<Text
								style={styles.footerTextStyle}
							>
								New Here?
              				</Text>
							<Text
								style={[
									styles.footerTextStyle,
									{ fontWeight: '600' }
								]}
								onPress={() => this.props.navigatorStore.navigate('SignUp')}
							>
								Sign Up
              				</Text>
						</View>
					</View>
				</KeyboardAvoidingView>
			</BgimageComponent>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
		paddingVertical: 10
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