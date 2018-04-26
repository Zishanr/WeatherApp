import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const GLOBAL_COLORS = require('../../src/constants/Colors');

const AppBar = ({ headerText }) => {
    return (
        <View style={{
            height: 50,
            backgroundColor: GLOBAL_COLORS.LIGHT_GRAY,
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 10,
            flexDirection: 'row',
        }}>

            <Text style={{ fontSize: 18, color: 'black' }}> {headerText} </Text>


        </View>
    );
}
export { AppBar };