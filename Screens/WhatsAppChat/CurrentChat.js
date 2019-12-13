import React, { Component } from 'react';
import { Image, Dimensions, SafeAreaView, KeyboardAvoidingView, StyleSheet, View, TouchableOpacity, Keyboard } from 'react-native'
import { Container, Header, Body, Thumbnail, Text } from 'native-base';
import { GiftedChat, Bubble, Send, Time } from 'react-native-gifted-chat'
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
            liked: false,
            bottom: 25
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

    renderTime(props) {
        return (
            <Time
                {...props}
                timeTextStyle={{
                    right: {
                        color: "black"
                    },
                    left: {
                        color: "black"
                    }
                }}
            />
        );
    }


    renderBubbleLight(props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#DCF8C6'
                    },
                    left: {
                        backgroundColor: '#F1F6FB'
                    }
                }}
                textStyle={{
                    right: {
                        color: 'black'
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
                        backgroundColor: '#DCF8C6'
                    },
                    left: {
                        backgroundColor: '#F1F6FB'
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
        const { bottom } = this.state
        return (
            <Send
                containerStyle={{ flex: 1 }}
                {...props}
            >
                <View style={{ marginRight: 10, marginBottom: bottom }}>
                    <Material
                        name={'arrow-right-circle'}
                        color={'#34B7F1'}
                        size={40}
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

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow.bind(this),
        )
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide.bind(this),
        )
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow() {
        this.setState({ bottom: 25 })
    }

    _keyboardDidHide() {
        this.setState({ bottom: 0 })
    }


    render() {
        const { bottom, chatColor, chatBackground, liked } = this.state
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
                    behavior={'padding'}
                    style={{ flex: 1 }}
                    enabled
                >
                    {!liked ? <GiftedChat
                        messages={this.state.messages}
                        onSend={messages => this.onSend(messages)}
                        isAnimated={true}
                        showAvatarForEveryMessage={true}
                        textInputStyle={{ marginBottom: bottom }}
                        renderTime={this.renderTime.bind(this)}
                        renderBubble={this.renderBubbleLight.bind(this)}
                        renderSend={this.renderSend.bind(this)}
                        extraData={this.state}
                        alwaysShowSend={true}
                        user={{
                            _id: 1,
                        }}
                    /> : <GiftedChat
                            messages={this.state.messages}
                            onSend={messages => this.onSend(messages)}
                            isAnimated={true}
                            showAvatarForEveryMessage={true}
                            textInputStyle={{ marginBottom: bottom }}
                            renderBubble={this.renderBubbleDark.bind(this)}
                            renderTime={this.renderTime.bind(this)}
                            renderSend={this.renderSend.bind(this)}
                            extraData={this.state}
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