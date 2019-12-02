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

class Contacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
        const { list } = this.state
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
                <View style={{ margin: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10 }}>
                        <Text style={{ color: '#0080ff' }}>Groups</Text>
                        <AnimatedIcon
                            name="plus"
                            color="#0080ff"
                        />
                    </View>
                    <View style={{ paddingTop: 20, paddingLeft: 10 }}>
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
                    <View style={{ flexDirection: 'row', marginTop: 10, paddingLeft: 10 }}>
                        <View style={{ height: 70, width: 70, backgroundColor: '#ff89Ae', justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}>
                            <Text style={{ color: '#fff', fontSize: 26 }} >
                                JP
                        </Text>
                        </View>
                        <View style={{ paddingTop: 10, padding: 20 }}>
                            <Text style={{ color: '#fff', fontSize: 20 }}>Jacob Pink</Text>
                            <Text style={{ color: 'rgba(255,255,255,0.5)' }}>My Card</Text>
                        </View>
                    </View>
                    <Text style={{ backgroundColor: '#2A272C', color: '#fff', paddingLeft: 20 }}>A</Text>
                    <ScrollView>
                        <List style={{ borderTopColor: 'white', borderTopWidth: 0.3 }}>
                            {list.map((v, i) => {
                                return (
                                    <ListItem avatar key={i} onPress={() => this.setState({ chat: true })}>
                                        <Body>
                                            <Text style={{ color: '#fff' }}>{v.title}</Text>
                                        </Body>
                                        <Right>
                                            <Text note>3:43 pm</Text>
                                        </Right>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </ScrollView>
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