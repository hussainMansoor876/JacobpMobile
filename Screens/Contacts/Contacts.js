import React, { Component } from 'react';
import { Image, Dimensions, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Item, Icon, Input, Text } from 'native-base';
import ActionButton from 'react-native-action-button';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux';

const AnimatedIcon = Animatable.createAnimatableComponent(Feather)
const AnimatedEvilIcons = Animatable.createAnimatableComponent(EvilIcons)
const AnimatedFontAwesome = Animatable.createAnimatableComponent(FontAwesome)



const { width, height } = Dimensions.get('window')

class Contacts extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
                <View style={{ margin: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#0080ff' }}>Groups</Text>
                        <AnimatedIcon
                            name="plus"
                            color="#0080ff"
                        />
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <Text style={{ color: '#fff', fontSize: 26, fontWeight: 'bold' }}>Contacts</Text>
                        <Item style={{ paddingLeft: 12, paddingRight: 12, borderRadius: 15, backgroundColor: '#100E13', borderColor: '#100E13', marginTop: 10 }}>
                            <AnimatedEvilIcons name="search" color="#fff" size={20} />
                            <Input placeholder="Search" placeholderTextColor="#fff" style={{ color: '#fff' }} />
                            <AnimatedFontAwesome
                                name="microphone"
                                color="#fff"
                                size={20}
                                style={{ color: '#fff' }}
                            />
                        </Item>
                    </View>
                </View>
            </SafeAreaView >
        );
    }
}


const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    icon: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = (state) => {
    console.log("mapToState", state.authReducer)
    return {
        user: "state.authReducer.user"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => dispatch(loginUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)