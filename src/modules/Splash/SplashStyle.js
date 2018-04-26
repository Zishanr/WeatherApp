import { StyleSheet } from 'react-native';


const GLOBAL_COLOR = require('../../constants/Colors');

export default SplashStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GLOBAL_COLOR.SPLASH_BACKGROUND,
    },

    splashText: {
        fontSize: 35,
        color: 'white',
    }

});