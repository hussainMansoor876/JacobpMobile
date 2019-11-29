import React, { Component } from 'react';
import { Image, Dimensions, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import ActionButton from 'react-native-action-button';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import CurrentChat from './CurrentChat'

const AnimatedIcon = Animatable.createAnimatableComponent(Ionicons)



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
            liked: false,
            chat: false,
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

    handleSmallAnimatedIconRef = (ref) => {
        this.smallAnimatedIcon = ref
    }

    handleOnPressLike = async () => {
        const { liked } = this.state
        this.smallAnimatedIcon.bounceIn()
        this.setState({ liked: !liked }, () => {
            const { liked } = this.state
            this.setState({
                chatColor: liked ? '#fff' : '#a3a6ae', chatBackground: liked ? '#142A3B' : '#fff'
            })
        })
    }

    changeChat() {
        this.setState({
            chat: false
        })
    }


    render() {
        const { liked, list, chatColor, chatBackground, create, chat } = this.state
        if (chat) {
            return (
                <CurrentChat changeChat={() => this.changeChat()} />
            )
        }
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: chatBackground }}>
                <Header style={{ backgroundColor: chatBackground, borderBottomWidth: 0 }}>
                    <Body style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => console.log('ty')}>
                            <Image
                                source={require('../../assets/images/left.png')}
                            />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 24, marginLeft: -20, textAlign: 'center', color: chatColor }}>IMessage</Text>
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
                    </Body>
                </Header>
                <ScrollView>
                    <List style={{ borderTopColor: 'white', borderTopWidth: 0.3 }}>
                        {!create ? list.map((v, i) => {
                            return (
                                <ListItem avatar key={i} onPress={() => this.setState({ chat: true })}>
                                    <Left>
                                        <Thumbnail source={{ uri: v.avatar_url }} />
                                    </Left>
                                    <Body>
                                        <Text style={{ color: chatColor }}>{v.title}</Text>
                                        <Text note>{v.subtitle}</Text>
                                    </Body>
                                    <Right>
                                        <Text note>3:43 pm</Text>
                                    </Right>
                                </ListItem>
                            )
                        }) : list.map((v, i) => {
                            return (
                                <ListItem avatar key={i} onPress={() => this.setState({ chat: true })}>
                                    <Left>
                                        <Thumbnail source={{ uri: v.avatar_url }} />
                                    </Left>
                                    <Body>
                                        <Text style={{ color: chatColor }}>{v.title}</Text>
                                        <Text note style={{ paddingBottom: 5, paddingTop: 5 }}>{v.status}</Text>
                                    </Body>
                                    <Right>
                                        <Text note>3:43 pm</Text>
                                    </Right>
                                </ListItem>
                            )
                        })
                        }
                    </List>
                </ScrollView>
                {!create && <ActionButton buttonColor="#009FFF" size={62} renderIcon={() => <Icon name="add" color="#fff" />} onPress={() => this.setState({ create: true })} />}
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