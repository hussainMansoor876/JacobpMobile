import React from 'react';
import { View, Dimensions, Text, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Reinput from 'reinput'
import { Button } from 'native-base'


class Login extends React.Component {
  constructor(props) {
    super(props);
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
      <ScrollView style={{ width: screenWidth, height: screenHeight }}>
        <KeyboardAvoidingView
          resetScrollToCoords={{ x: 0, y: 0 }}
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
          style={{ flex: 1 }}
        >
          <View style={{ height: screenHeight / 4, marginLeft: 30, marginRight: 20 }}>
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 60 }}>
              <Image
                source={require('../assets/images/login-fav.png')}
                style={{ margin: 5, height: 50, width: 50, resizeMode: 'contain' }}
              />

              <Text style={{ margin: 10, fontSize: 18, color: '#7540EE', marginTop: 27, marginLeft: 0 }}>Simple</Text>
              <Text style={{ margin: 10, fontSize: 18, color: '#7540EE', marginTop: 27, marginLeft: 0 }}>Hub</Text>
            </View>
          </View>
          <View style={{ height: screenHeight / 1.8, marginRight: 20, marginLeft: 30, }}>
            <Text style={{ fontSize: 24, color: '#25265E', marginBottom: 10 }}>Hello!</Text>
            <Text style={{ fontSize: 16, color: '#25265E' }}>You can use <Text style={{ color: '#7540EE' }}>Face ID</Text>
              {'\n'}to authenticate in the future
          </Text>
            <View style={{ marginTop: 20, marginRight: 30 }}>
              <Reinput label='E-mail address' keyboardType="email-address" />
              <Reinput label='Password' secureTextEntry={true}
              />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginRight: 30 }}>
              <Button rounded light style={{ width: screenWidth / 4, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ textAlign: 'center', color: '#7540EE' }}>Login</Text>
              </Button>
              <Button transparent>
                <Text style={{ textAlign: 'center', color: '#7540EE' }}>Forgot password?</Text>
              </Button>
            </View>
          </View>
          <View style={{ height: screenHeight / 9, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: -50, marginLeft: 30, marginRight: 20, marginTop: 20 }}>
            <Text style={{ fontSize: 16 }}>No account?{'\t\t'}
            </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={{ fontSize: 16, color: '#FF7052' }}>Create one</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

export default Login;
