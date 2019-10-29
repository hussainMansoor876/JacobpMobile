import React from 'react';
import { View, Dimensions, Text, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Reinput from 'reinput'
import { Button, Content } from 'native-base'


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
    const { screenHeight, screenWidth } = this.state
    return (
      <ScrollView style={{ marginLeft: 30, marginRight: 20, width: screenWidth }}>
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          resetScrollToCoords={{ x: 0, y: 0 }} >
          <View style={{ height: screenHeight / 4 }}>
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 60 }}>
              <Image
                source={require('../assets/images/login-fav.png')}
                style={{ margin: 5, height: 50, width: 50, resizeMode: 'contain' }}
              />

              <Text style={{ margin: 10, fontSize: 18, color: '#7540EE', marginTop: 27, marginLeft: 0 }}>Simple</Text>
              <Text style={{ margin: 10, fontSize: 18, color: '#7540EE', marginTop: 27, marginLeft: 0 }}>Hub</Text>
            </View>
          </View>
          <View style={{ height: screenHeight / 2, marginRight: 30 }}>
            <Text style={{ fontSize: 24, color: '#25265E', marginBottom: 10 }}>Hello!</Text>
            <Text style={{ fontSize: 16, color: '#25265E' }}>You can use <Text style={{ color: '#7540EE' }}>Face ID</Text>
              {'\n'}to authenticate in the future
          </Text>
            <View style={{ marginTop: 20, marginRight: 30 }}>
              <Reinput label='Email address' keyboardType="email-address" />
              <Reinput label='Password' secureTextEntry={true} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Button rounded light style={{ width: screenWidth / 4, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ textAlign: 'center' }}>Login</Text>
              </Button>
              <Button transparent>
                <Text>Light</Text>
              </Button>
            </View>
          </View>
          <View style={{ height: screenHeight / 4 }}>

          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

export default Login;
