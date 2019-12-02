import React, { Component } from 'react';
import { Image, Dimensions, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Item, Icon, Input, Text, List, Body, ListItem, Left, Thumbnail, Right } from 'native-base';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux';

const AnimatedIcon = Animatable.createAnimatableComponent(Feather)
const AnimatedEvilIcons = Animatable.createAnimatableComponent(EvilIcons)
const AnimatedFontAwesome = Animatable.createAnimatableComponent(FontAwesome)



const { width, height } = Dimensions.get('window')

class ViewContacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>

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

export default connect(mapStateToProps, mapDispatchToProps)(ViewContacts)