import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SplashStyle from '../Splash/SplashStyle';
import { NavigationActions } from 'react-navigation';

const GLOBAL_STRING = require('../../constants/String');


class Splash extends Component {
    render() {
        return (
            <View style={SplashStyle.container}>

                <Text style={SplashStyle.splashText}> {GLOBAL_STRING.APP_NAME} </Text>

            </View>
        )
    }

    componentDidMount() {
        this.setTimePassed();
    }

    setTimePassed = () => {
        setTimeout(() => {
            this._navigateTo();
        }, 2000);
    }

    _navigateTo = () => {
        const actionToDispatch = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'home' })]
        })
        this.props.navigation.dispatch(actionToDispatch)
    }
}

export default Splash;
