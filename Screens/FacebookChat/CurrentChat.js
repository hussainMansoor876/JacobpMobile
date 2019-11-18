import React, { Component } from 'react';
import { Image, Dimensions, SafeAreaView, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import ToggleSwitch from 'toggle-switch-react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window')

class ChatList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: []
        }
    }

    UNSAFE_componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
                    createdAt: new Date(),
                    quickReplies: {
                        type: 'radio', // or 'checkbox',
                        keepIt: true,
                        values: [
                            {
                                title: '😋 Yes',
                                value: 'yes',
                            },
                            {
                                title: '📷 Yes, let me show you with a picture!',
                                value: 'yes_picture',
                            },
                            {
                                title: '😞 Nope. What?',
                                value: 'no',
                            },
                        ],
                    },
                    user: {
                        _id: 2,
                        name: 'React Native',
                    },
                },
                {
                    _id: 2,
                    text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
                    createdAt: new Date(),
                    quickReplies: {
                        type: 'checkbox', // or 'radio',
                        values: [
                            {
                                title: 'Yes',
                                value: 'yes',
                            },
                            {
                                title: 'Yes, let me show you with a picture!',
                                value: 'yes_picture',
                            },
                            {
                                title: 'Nope. What?',
                                value: 'no',
                            },
                        ],
                    },
                    user: {
                        _id: 2,
                        name: 'React Native',
                    },
                }
            ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
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
                            onToggle={isOn => this.setState({ on: isOn, chatColor: isOn ? '#fff' : 'black', chatBackground: isOn ? 'black' : '#fff', })}
                        />
                    </Body>
                </Header>
                <KeyboardAvoidingView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
                    style={{ flex: 1 }}
                >
                    <GiftedChat
                        messages={this.state.messages}
                        onSend={messages => this.onSend(messages)}
                        isAnimated={true}
                        showAvatarForEveryMessage={true}
                        renderUsernameOnMessage={true}
                        user={{
                            _id: 1,
                        }}
                    />
                </KeyboardAvoidingView>
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