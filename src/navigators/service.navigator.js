import { NavigationActions, DrawerActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
	_navigator = navigatorRef;
}

function navigate(routeName, params) {
	_navigator.dispatch(
		NavigationActions.navigate({
			routeName,
			params,
		})
	);
}

// add other navigation functions 
// that you need and export them

function openDrawer(){
	_navigator.dispatch(DrawerActions.openDrawer())
}

function closeDrawer(){
	_navigator.dispatch(DrawerActions.closeDrawer())
}

export default {
	navigate,
	setTopLevelNavigator,
	//getTopLevelNavigator,
	openDrawer,
	closeDrawer,
};