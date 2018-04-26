import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './src/store/ConfigureStore';
import { StackNavigator } from 'react-navigation';
import Splash from './src/modules/Splash/Splash';
import Home from './src/modules/Home/HomeScreen';

const AppNavigator = StackNavigator({
  splash: {
    screen: Splash,
    navigationOptions: {
      header: null
    },
  },

  home: {
    screen: Home,
    navigationOptions: {
      header: null
    },
  }

  

},
  {
    headerMode: 'none',
    initialRouteName: 'splash'
  });


const store = configureStore();

const App = () => {
  return (
    < Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </Provider >
  )
}

export default App;


