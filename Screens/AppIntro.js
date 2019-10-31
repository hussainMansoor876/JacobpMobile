import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import SplashScreen from 'react-native-splash-screen'
import { Icon, Button } from 'react-native-elements'
import Navigator from '../navigation/AppNavigator'

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
});

const slides = [
  {
    key: '1',
    title: 'Get to know Hub',
    text: 'Today is the day you graduate from unorganized business management',
    url: '../assets/images/stack.png',
    colors: ['#7540EE', '#B066FE'],
  },
  {
    key: '2',
    title: 'Everything in one place',
    text: 'Hub is your tool. The workplace, centralized.',
    url: '../assets/images/stack.png',
    colors: ['#7540EE', '#7540EE'],
  },
  {
    key: '3',
    title: 'RULE OF THIRDS',
    text: 'The rule of thirds states that an image is most pleasing when its subjects or regions are ...',
    url: '../assets/images/stack.png',
    colors: ['#7540EE', '#7540EE'],
  }
];

export default class AppIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: Dimensions.get('window').width,
      screenHeight: Dimensions.get('window').height,
      showApp: false
    }
  }
  _renderNextButton = () => {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Icon
          name='arrow-forward'
          color='#fff'
          containerStyle={{ backgroundColor: '#35225C', borderRadius: 30, width: 140, height: 50, justifyContent: 'center', alignItems: 'center' }}
        />
      </View>
    );
  };

  _renderPrevButton = () => {
    return (
      <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <Icon
          name='arrow-forward'
          color='#fff'
          containerStyle={{ backgroundColor: '#35225C', borderRadius: 30, width: 140, height: 50, justifyContent: 'center', alignItems: 'center' }}
        />
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <View style={{ width: 300, backgroundColor: '#35225C', flexDirection: 'row', borderRadius: 10, height: 50, justifyContent: 'center', alignItems: 'center', }}>
          <Text style={{ color: 'white', paddingLeft: 90, paddingRight: 20 }}>Get Started</Text>
          <Icon
            name='arrow-forward'
            color='#fff'
            containerStyle={{ backgroundColor: '#35225C', borderRadius: 10, width: 90, justifyContent: 'center', alignItems: 'flex-start' }}
          />
        </View>
      </View>
    );
  };

  _renderItem = ({ item, dimensions }) => {
    const { screenHeight } = this.state
    return (
      <LinearGradient
        style={[
          dimensions,
        ]}
        colors={item.colors}
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0.1, y: 1 }}
      >
        {item.key == 1 && <View style={{ height: 30, justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 30, marginRight: 30 }}>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ showApp: true })}>
            <Text style={{ fontSize: 18, fontFamily: 'Montserrat', color: '#FFFFFF' }}>Skip intro</Text>
          </TouchableOpacity>
        </View>}
        <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
          {item.key == 1 ? <Image
            source={require('../assets/images/stack.png')}
            style={{ margin: 5, height: screenHeight / 2.3, width: screenHeight / 2.3, resizeMode: 'contain' }}
          /> : item.key == 2 ? <Image
            source={require('../assets/images/Device.png')}
            style={{ margin: 5, marginTop: -40, marginBottom: -30, height: screenHeight / 1.5, width: screenHeight / 1.5, resizeMode: 'contain' }}
          /> : <Image
                source={require('../assets/images/Device2.png')}
                style={{ margin: 5, height: screenHeight / 2, width: screenHeight / 2, resizeMode: 'contain' }}
              />}
          <Text style={{ color: '#FFFFFF', fontSize: 30 }}>{item.title}
          </Text>
          <Text style={{ marginTop: 20, marginRight: 50, marginLeft: 50, color: '#FFFFFF', fontSize: 18, fontFamily: 'Montserrat' }}>{item.text}</Text>
        </View>
      </LinearGradient>
    )
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const { screenHeight, screenWidth, showApp } = this.state
    if (showApp) {
      return (
        <Navigator />
      )
    }
    return <AppIntroSlider
      slides={slides}
      renderItem={this._renderItem}
      style={{ height: screenHeight, width: screenWidth }}
      renderNextButton={this._renderNextButton}
      renderPrevButton={this._renderNextButton}
      renderDoneButton={this._renderDoneButton}
      onDone={() => this.setState({ showApp: true })}
      bottomButton
    />
  }
}