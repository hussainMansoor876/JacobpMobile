import React, { Component } from 'react';
import { Image, Dimensions, SafeAreaView, KeyboardAvoidingView, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Container, Header, Body, Thumbnail, Text } from 'native-base';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux';

const AnimatedIcon = Animatable.createAnimatableComponent(Ionicons)
const Material = Animatable.createAnimatableComponent(MaterialCommunityIcons)

const { width, height } = Dimensions.get('window')

class ChatList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            chatColor: '#a3a6ae',
            leftBubbleColor: '#f1f1f0',
            on: false,
            liked: false
        }
    }

    handleSmallAnimatedIconRef = (ref) => {
        this.smallAnimatedIcon = ref
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
                }
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
                        backgroundColor: '#e1306c'
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
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#e1306c'
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
                    <Material
                        // ref={this.handleSmallAnimatedIconRef}
                        name={'arrow-right-circle'}
                        color={'#e1306c'}
                        size={35}
                        style={styles.icon}
                    />
                </View>
            </Send>
        );
    }

    handleOnPressLike = async () => {
        const { liked } = this.state
        this.smallAnimatedIcon.bounceIn()
        this.setState({ liked: !liked }, () => {
            const { liked } = this.state
            this.setState({
                chatColor: liked ? '#fff' : '#a3a6ae', chatBackground: liked ? '#142A3B' : '#fff',
                leftBubbleColor: liked ? '#1f3c53' : '#f1f1f0'
            })
        })
    }

    render() {
        const { chatColor, chatBackground, liked } = this.state
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: chatBackground }}>
                <Header style={{ backgroundColor: chatBackground, borderBottomWidth: 0, height: 80 }}>
                    <Body style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 5, flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => this.props.changeChat()}>
                                <Icon
                                    name="arrow-left"
                                    type="feather"
                                    color={!liked ? 'black' : '#fff'}
                                    containerStyle={{ width: width / 8 }}
                                />
                            </TouchableOpacity>
                            <Image style={{ height: 60, width: 60, borderRadius: 50 }} resizeMode={'contain'} source={{ uri: 'https://placeimg.com/140/140/any' }} />
                            <Text style={{ fontSize: 24, marginLeft: -20, textAlign: 'center', color: chatColor, paddingLeft: 30 }}>Jacob</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity
                                style={{ alignSelf: 'flex-end', paddingRight: 10 }}
                                activeOpacity={1}
                                onPress={this.handleOnPressLike}
                            >
                                <AnimatedIcon
                                    ref={this.handleSmallAnimatedIconRef}
                                    name={liked ? 'ios-sunny' : 'ios-moon'}
                                    color={liked ? 'yellow' : '#a3a6ae'}
                                    size={35}
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                        </View>
                    </Body>
                </Header>
                <KeyboardAvoidingView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
                    style={{ flex: 1 }}
                >
                    {!liked && <GiftedChat
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
                    {liked && <GiftedChat
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


export default connect(mapStateToProps, mapDispatchToProps)(ChatList)