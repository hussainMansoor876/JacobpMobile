import React from 'react';
import { View, Dimensions, Text, Image } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

const { w } = Dimensions

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      screenWidth: Dimensions.get('window').width,
      screenHeight: Dimensions.get('window').height
    }
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const { screenHeight } = this.state
    return (
      <View style={{ flex: 1, marginLeft: 30, marginRight: 20 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: 'row', paddingTop: 60 }}>
            <Image
              source={require('../assets/images/login-fav.png')}
              style={{ margin: 5, height: 50, width: 50, resizeMode: 'contain' }}
            />

            <Text style={{ margin: 10, fontSize: 18, color: '#7540EE', marginTop: 27, marginLeft: 0 }}>Simple</Text>
            <Text style={{ margin: 10, fontSize: 18, color: '#7540EE', marginTop: 27, marginLeft: 0 }}>Hub</Text>
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={{ fontSize: 24, color: '#25265E', marginBottom: 10 }}>Hello!</Text>
          <Text style={{ fontSize: 16, color: '#25265E' }}>You can use <Text style={{ color: '#7540EE' }}>Face ID</Text>
            {'\n'}to authenticate in the future
          </Text>
        </View>
        <View style={{ flex: 1 }}>

        </View>
      </View>
    );
  }
}

export default Login;
