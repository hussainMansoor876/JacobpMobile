import React from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

class Splash extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }

  render() {
    return (
        <View>
          <Text>Hello JacobpMobile</Text>
        </View>
    );
  }
}

export default Splash;
