import React from 'react';
import { View, Dimensions, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Reinput from 'reinput'
import { Button as NBButton } from 'native-base'
// import { Button } from "galio-framework";
import { Block, Text, Button as GaButton, theme } from 'galio-framework'
import SignUp from './Signup'
import { connect } from 'react-redux';
import { createAccount, SideView } from '../Redux/actions/authActions'
import CustomDrawer from '../navigation/AppNavigator'
import { argonTheme, tabs } from '../constants'
import { Button, Select, Icon, Input, Header, Switch } from "../components/";

const { width } = Dimensions.get("screen");

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: Dimensions.get('window').width,
      screenHeight: Dimensions.get('window').height,
      show: false
    }
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const { screenHeight, screenWidth, show } = this.state
    const { create } = this.props
    // return (
    //   <Block flex>
    //     <Text size={16} style={styles.title}>
    //       Buttons
    //     </Text>
    //     <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
    //       <Block center>
    //         <Button textStyle={{ fontFamily: 'open-sans-bold' }} color="default" style={styles.button}>
    //           DEFAULT
    //         </Button>
    //       </Block>
    //       <Block center>
    //         <Button
    //           color="secondary"
    //           textStyle={{ fontFamily: 'open-sans-bold', color: "black" }}
    //           style={styles.button}
    //         >
    //           SECONDARY
    //         </Button>
    //       </Block>
    //       <Block center>
    //         <Button textStyle={{ fontFamily: 'open-sans-bold' }} style={styles.button}>PRIMARY</Button>
    //       </Block>
    //       <Block center>
    //         <Button textStyle={{ fontFamily: 'open-sans-bold' }} color="info" style={styles.button}>
    //           INFO
    //         </Button>
    //       </Block>
    //       <Block center>
    //         <Button textStyle={{ fontFamily: 'open-sans-bold' }} color="success" style={styles.button}>
    //           SUCCESS
    //         </Button>
    //       </Block>
    //       <Block center>
    //         <Button textStyle={{ fontFamily: 'open-sans-bold' }} color="warning" style={styles.button}>
    //           WARNING
    //         </Button>
    //       </Block>
    //       <Block center>
    //         <Button textStyle={{ fontFamily: 'open-sans-bold' }} color="error" style={styles.button}>
    //           ERROR
    //         </Button>
    //       </Block>
    //       <Block row space="evenly">
    //         <Block flex left>
    //           <Select
    //             defaultIndex={1}
    //             options={["01", "02", "03", "04", "05"]}
    //           />
    //         </Block>
    //         <Block flex center>
    //           <Button textStyle={{ fontFamily: 'open-sans-bold', fontSize: 12 }} small center color="default" style={styles.optionsButton}>
    //             DELETE
    //           </Button>
    //         </Block>
    //         <Block flex={1.25} right>
    //           <Button textStyle={{ fontFamily: 'open-sans-bold', fontSize: 12 }} center color="default" style={styles.optionsButton}>
    //             SAVE FOR LATER
    //           </Button>
    //         </Block>
    //       </Block>
    //     </Block>
    //   </Block>
    // );
    if (show) {
      return (
        <CustomDrawer />
      )
    }
    else if (create) {
      return (
        <SignUp />
      )
    }
    return (
      <ScrollView style={{ width: screenWidth, height: screenHeight, backgroundColor: '#fff' }}>
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
              <Button style={{ flex: 1, marginRight: 20, backgroundColor: '#7540EE' }} textStyle={{ fontFamily: 'open-sans-bold' }} color="info">
              LOGIN
            </Button>
            {/* <Button style={{ flex: 1 }} textStyle={{ fontFamily: 'open-sans-bold' }} color="info" >
              INFO
            </Button>
              <Button onPress={() => this.setState({ show: true })} rounded light style={{ width: screenWidth / 4, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ textAlign: 'center', color: '#7540EE' }}>Login</Text>
              </Button> */}
              <NBButton transparent>
                <Text style={{ textAlign: 'center', color: '#7540EE' }}>Forgot password?</Text>
              </NBButton>
            </View>
          </View>
          <View style={{ height: screenHeight / 9, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: -50, marginLeft: 30, marginRight: 20, marginTop: 20 }}>
            <Text style={{ fontSize: 16, paddingRight: 5 }}>No account?
            </Text>
            <TouchableOpacity onPress={() => this.props.createAccount(true)}>
              <Text style={{ fontSize: 16, color: '#FF7052' }}>Create one</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 44,
    color: argonTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE * 2
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2
  },
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 2
  },
  optionsButton: {
    width: "auto",
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10
  },
  input: {
    borderBottomWidth: 1
  },
  inputDefault: {
    borderBottomColor: argonTheme.COLORS.PLACEHOLDER
  },
  inputTheme: {
    borderBottomColor: argonTheme.COLORS.PRIMARY
  },
  inputTheme: {
    borderBottomColor: argonTheme.COLORS.PRIMARY
  },
  inputInfo: {
    borderBottomColor: argonTheme.COLORS.INFO
  },
  inputSuccess: {
    borderBottomColor: argonTheme.COLORS.SUCCESS
  },
  inputWarning: {
    borderBottomColor: argonTheme.COLORS.WARNING
  },
  inputDanger: {
    borderBottomColor: argonTheme.COLORS.ERROR
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center"
  }
});

const mapStateToProps = (state) => {
  return {
    create: state.authReducer.create,
    side: state.authReducer.side
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAccount: (create) => dispatch(createAccount(create)),
    SideView: (side) => dispatch(SideView(side))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)