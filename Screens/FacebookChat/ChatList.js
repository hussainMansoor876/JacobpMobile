import React, { Component } from 'react';
import { Image, Dimensions, SafeAreaView, ScrollView } from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import ToggleSwitch from 'toggle-switch-react-native'

const { width, height } = Dimensions.get('window')

export default class ChatList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            on: false,
            label: "Dark Mode",
            chatColor: 'black',
            chatBackground: '#fff',
            list: [
                {
                    title: 'Amy Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Doing what you like will always keep you happy . .'
                },
                {
                    title: 'Chris Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Doing what you like will always keep you happy . .'
                },
                {
                    title: 'Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Doing what you like will always keep you happy . .'
                },
                {
                    title: 'Chris Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Doing what you like will always keep you happy . .'
                },
                {
                    title: 'Amy',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Doing what you like will always keep you happy . .'
                },
                {
                    title: 'Chris',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Doing what you like will always keep you happy . .'
                },
                {
                    title: 'Amy Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Doing what you like will always keep you happy . .'
                },
                {
                    title: 'Jackson Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Doing what you like will always keep you happy . .'
                },
                {
                    title: 'Jackson Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Doing what you like will always keep you happy . .'
                },
                {
                    title: 'Chris Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Doing what you like will always keep you happy . .'
                },
            ]
        }
    }


    render() {
        const { on, list, chatColor, chatBackground } = this.state
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
                            onToggle={isOn => this.setState({ on: isOn, chatColor: isOn ? '#fff' : 'black', chatBackground: isOn ? 'black' : '#fff' })}
                        />
                    </Body>
                </Header>
                <ScrollView>
                    <List style={{ borderTopColor: 'white', borderTopWidth: 0.3 }}>
                        {
                            list.map((v, i) => {
                                return (
                                    <ListItem avatar key={i}>
                                        <Left>
                                            <Thumbnail source={{ uri: v.avatar_url }} />
                                        </Left>
                                        <Body>
                                            <Text style={{ color: chatColor }}>{v.title}</Text>
                                            <Text note style={{ color: chatColor }}>{v.subtitle}</Text>
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
            </SafeAreaView>
        );
    }
}