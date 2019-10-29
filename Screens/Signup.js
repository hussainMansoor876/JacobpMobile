import React from 'react';
import { View, Dimensions, Text, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Reinput from 'reinput'
import { Button } from 'native-base'


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: Dimensions.get('window').width,
            screenHeight: Dimensions.get('window').height
        }
    }

    render() {
        const { screenHeight, screenWidth } = this.state
        return (
            <ScrollView style={{ width: screenWidth, height: screenHeight }}>
                <KeyboardAvoidingView
                    behavior="padding"
                    enabled
                    resetScrollToCoords={{ x: 0, y: 0 }} >
                    <View style={{ height: screenHeight / 3.2, marginLeft: 30, marginRight: 20 }}>
                        <View style={{ flex: 1, paddingTop: 50 }}>
                            <Image
                                source={require('../assets/images/arrow.png')}
                                style={{ margin: 5, height: 30, width: 40, resizeMode: 'contain' }}
                            />
                            <Text style={{ fontSize: 24, marginTop: 20, marginLeft: 0 }}>Sign up</Text>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontFamily: 'MaisonNeue-Medium', fontSize: 18, color: '#787993' }}>Create an account to use{'\t\t'}
                                    <Text style={{ fontFamily: 'MaisonNeue-Medium', fontSize: 18, color: '#FF7052', fontWeight: 'bold' }}>Hub{'\n'}</Text>
                                    <Text style={{ fontFamily: 'MaisonNeue-Medium', fontSize: 18, color: '#FF7052' }}> without limits</Text>
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
                            <Button rounded light style={{ width: screenWidth / 3.5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFE2DC' }}>
                                <Text style={{ textAlign: 'center', fontFamily: 'Maison Neue', color: '#FF7052' }}>Sign up</Text>
                            </Button>
                        </View>
                    </View>
                    <View style={{ height: screenHeight / 9, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 30, marginRight: 20, marginTop: 20 }}>
                        <Text style={{ fontFamily: 'MaisonNeue-Medium', fontSize: 18 }}>Already have an account.{'\t'}
                        </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{ fontFamily: 'MaisonNeue-Medium', fontSize: 18, color: '#7540EE' }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

export default Signup;
