import React, { Component } from 'react';
import { Image, Dimensions, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import ToggleSwitch from 'toggle-switch-react-native'
import ActionButton from 'react-native-action-button';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window')

class ChatList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            on: false,
            label: "Dark Mode",
            chatColor: 'black',
            chatBackground: '#fff',
            create: false,
            list: [
                {
                    title: 'Amy Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Doing what you like will always keep you happy . .',
                    status: 'Designer'
                },
                {
                    title: 'Chris Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Doing what you like will always keep you happy . .',
                    status: 'Designer'
                },
                {
                    title: 'Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Doing what you like will always keep you happy . .',
                    status: 'Designer'
                },
                {
                    title: 'Chris Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Doing what you like will always keep you happy . .',
                    status: 'Designer'
                },
                {
                    title: 'Amy',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Doing what you like will always keep you happy . .',
                    status: 'Designer'
                },
                {
                    title: 'Chris',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Doing what you like will always keep you happy . .',
                    status: 'Designer'
                },
                {
                    title: 'Amy Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Doing what you like will always keep you happy . .',
                    status: 'Designer'
                },
                {
                    title: 'Jackson Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Doing what you like will always keep you happy . .',
                    status: 'Designer'
                },
                {
                    title: 'Jackson Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Doing what you like will always keep you happy . .',
                    status: 'Designer'
                },
                {
                    title: 'Chris Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Doing what you like will always keep you happy . .',
                    status: 'Designer'
                },
            ]
        }
    }


    render() {
        const { on, list, chatColor, chatBackground, create } = this.state
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: chatBackground }}>
                <Header style={{ backgroundColor: chatBackground, borderBottomWidth: 0 }}>
                    <Body style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Image
                            source={require('../../assets/images/left.png')}
                        />
                        <Text style={{ fontSize: 24, marginLeft: -20, textAlign: 'center', color: chatColor }}>Messages</Text>
                        <ToggleSwitch
                            isOn={on}
                            onColor="rgba(255,255,255,0.5)"
                            offColor="rgba(0,0,0,0.1)"
                            // label="Switch to Dark Mode"
                            // labelStyle={{ color: "black", fontWeight: "900" }}
                            size="medium"
                            onToggle={isOn => this.setState({ on: isOn, chatColor: isOn ? '#fff' : 'black', chatBackground: isOn ? 'black' : '#fff',  })}
                        />
                    </Body>
                </Header>
                
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


export default connect(mapStateToProps, mapDispatchToProps)(ChatList)