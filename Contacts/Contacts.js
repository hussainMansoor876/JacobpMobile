import React, { Component } from 'react';
import { Image, Dimensions, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import ActionButton from 'react-native-action-button';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux';

const AnimatedIcon = Animatable.createAnimatableComponent(Ionicons)



const { width, height } = Dimensions.get('window')

class Contacts extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Text>Hello</Text>
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