import React, { Component } from 'react';
import { Image, Dimensions, SafeAreaView, KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { Container, Header, Body, Thumbnail, Text } from 'native-base';
import ToggleSwitch from 'toggle-switch-react-native'
import { GiftedChat, Bubble, Send, MessageImage } from 'react-native-gifted-chat'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window')

class ChatList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            chatColor: '#a3a6ae',
            leftBubbleColor: '#f1f1f0',
            on: false
        }
    }

    UNSAFE_componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                },
            ],
        })
    }

    onSend(messages = []) {
        console.log('message', messages)
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    renderBubble(props) {
        const { on } = this.state
        console.log('on', on)
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#0099FF'
                    },
                    left: {
                        backgroundColor: '#1f3c53'
                    }
                }}
                textStyle={{
                    left: {
                        color: '#a3a6ae'
                    }
                }}
            />
        )
    }

    renderBubbleLight(props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#0099FF'
                    },
                    left: {
                        backgroundColor: '#f1f1f0'
                    }
                }}
                textStyle={{
                    left: {
                        color: '#a3a6ae'
                    }
                }}
            />
        )
    }

    renderBubbleDark(props) {
        const { on } = this.state
        console.log('Dark', on)
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#0099FF'
                    },
                    left: {
                        backgroundColor: '#1f3c53'
                    }
                }}
                textStyle={{
                    left: {
                        color: '#a3a6ae'
                    }
                }}
            />
        )
    }


    renderSend(props) {
        return (
            <Send
                containerStyle={{ flex: 1 }}
                {...props}
            >
                <View style={{ marginRight: 10, marginBottom: 5 }}>
                    <Icon
                        size={35}
                        // color="#fff"
                        name="arrow-right-circle"
                        type="feather"
                    />
                </View>
            </Send>
        );
    }

    // renderMessage(props) {
    //     console.log('props', props.currentMessage.image)
    //     return (
    //         <MessageImage {...props}>
    //             <Image source={{ uri: props.currentMessage.image }} resizeMode={'contain'} />
    //         </MessageImage>
    //     )
    // }

    render() {
        const { on, list, chatColor, chatBackground, create } = this.state
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: chatBackground }}>
                <Header style={{ backgroundColor: chatBackground, borderBottomWidth: 0 }}>
                    <Body style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Icon 
                        name="arrow-left"
                        type="feather"
                        color={!on ? 'black' : '#fff'}
                        />
                        <Text style={{ fontSize: 24, marginLeft: -20, textAlign: 'center', color: chatColor }}>Messages</Text>
                        <ToggleSwitch
                            isOn={on}
                            onColor="rgba(255,255,255,0.5)"
                            offColor="rgba(0,0,0,0.1)"
                            // label="Switch to Dark Mode"
                            // labelStyle={{ color: "black", fontWeight: "900" }}
                            size="medium"
                            onToggle={isOn => this.setState({
                                on: isOn, chatColor: isOn ? '#fff' : 'black', chatBackground: isOn ? '#142A3B' : '#fff',
                                leftBubbleColor: isOn ? '#1f3c53' : '#f1f1f0'
                            })}
                        />
                    </Body>
                </Header>
                <KeyboardAvoidingView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
                    style={{ flex: 1 }}
                >
                    {!on && <GiftedChat
                        messages={this.state.messages}
                        onSend={messages => this.onSend(messages)}
                        isAnimated={true}
                        showAvatarForEveryMessage={true}
                        // renderUsernameOnMessage={true}
                        renderBubble={this.renderBubbleLight.bind(this)}
                        renderSend={this.renderSend}
                        // renderMessageImage={this.renderMessage.bind(this)}
                        alwaysShowSend={true}
                        user={{
                            _id: 1,
                        }}
                    />}
                    {on && <GiftedChat
                        messages={this.state.messages}
                        onSend={messages => this.onSend(messages)}
                        isAnimated={true}
                        showAvatarForEveryMessage={true}
                        // renderUsernameOnMessage={true}
                        renderBubble={this.renderBubbleDark.bind(this)}
                        renderSend={this.renderSend}
                        alwaysShowSend={true}
                        user={{
                            _id: 1,
                        }}
                    />}
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