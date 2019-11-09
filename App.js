import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';
// import Navigator from './navigation/AppNavigator'
import SplashScreen from 'react-native-splash-screen'
import HomeScreen from './Components/HomeScreen'
import SettingScreen from './Components/Setting'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppConatiner />
      </View>
    )
  }

  // render() {
  //   return (
  //     <View style={{ flex: 1 }}>
  //       <Provider store={store} >
  //         <Navigator />
  //       </Provider>
  //     </View>
  //   );
  // }
}

export default App;


const AppDrawerNavigator = createDrawerNavigator({
  HomeScreen: HomeScreen,
  SettingScreen: SettingScreen
}, {
  drawerWidth: 230
})


const AppConatiner = createAppContainer(AppDrawerNavigator)
