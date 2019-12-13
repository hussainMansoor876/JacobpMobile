import React from 'react';
import { View, Dimensions, Text, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Reinput from 'reinput'
import { Button } from 'native-base'
import AppIntro from './AppIntro'
import { connect } from 'react-redux';
import { createAccount } from '../Redux/actions/authActions'


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: Dimensions.get('window').width,
            screenHeight: Dimensions.get('window').height,
            isUser: false
        }
    }

    render() {
        const { screenHeight, screenWidth, isUser } = this.state
        if (isUser) {
            return (
                <AppIntro />
            )
        }
        return (
            <ScrollView style={{ width: screenWidth, height: screenHeight }}>
                <KeyboardAvoidingView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
                    style={{ flex: 1 }}
                >
                    <View style={{ height: screenHeight / 3.2, marginLeft: 30, marginRight: 20 }}>
                        <View style={{ flex: 1, paddingTop: 50 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                                <Image
                                    source={require('../assets/images/arrow.png')}
                                    style={{ margin: 5, height: 30, width: 40, resizeMode: 'contain' }}
                                />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 24, marginTop: 20, marginLeft: 0 }}>Sign up</Text>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 18, color: '#787993' }}>Create an account to use{'\t\t'}
                                    <Text style={{ fontSize: 18, color: '#FF7052', fontWeight: 'bold' }}>Hub{'\n'}</Text>
                                    <Text style={{ fontSize: 18, color: '#FF7052' }}> without limits</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: screenHeight / 2, marginRight: 20, marginLeft: 30, }}>
                        <View style={{ marginTop: 20, marginRight: 30 }}>
                            <Reinput label='E-mail address' keyboardType="email-address" />
                            <Reinput label='Password' secureTextEntry={true} />
                            <Reinput label='Confirm Password' secureTextEntry={true} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginRight: 30 }}>
                            <Button rounded light style={{ width: screenWidth / 3.5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFE2DC' }} onPress={() => this.setState({ isUser: true })}>
                                <Text style={{ textAlign: 'center', color: '#FF7052' }}>Sign up</Text>
                            </Button>
                        </View>
                    </View>
                    <View style={{ height: screenHeight / 9, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 30, marginRight: 20, marginTop: 20 }}>
                        <Text style={{ fontSize: 18, paddingRight: 5 }}>Already have an account.
                        </Text>
                        <TouchableOpacity onPress={() => this.props.createAccount(false)}>
                            <Text style={{ fontSize: 18, color: '#7540EE' }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        create: state.authReducer.create
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        createAccount: (create) => dispatch(createAccount(create))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Signup)
