import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Navigator from './navigation/AppNavigator'
import SplashScreen from 'react-native-splash-screen'
import { enableScreens } from 'react-native-screens';


enableScreens();

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
        <Provider store={store} >
          <Navigator />
        </Provider>
      </View>
    );
  }
}

export default App;
