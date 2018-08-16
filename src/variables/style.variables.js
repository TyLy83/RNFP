import React from 'react';
import { Dimensions, StyleSheet, } from 'react-native';
import globalVariables from './global.variables';

const { width } = Dimensions.get('window');
const { paddingHorizontal } = globalVariables;

const styles = StyleSheet.create({

    footerStyle: {
        position: 'absolute',
        left: paddingHorizontal,
        right: paddingHorizontal,
        bottom: 0,
        width: width - paddingHorizontal        
    },
    iconStyle: {
        color: '#000'
    }
});


export default styles;