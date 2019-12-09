import React, { Component } from 'react';
import { Image, Dimensions, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Item, Icon, Input, Text, List, Body, ListItem, Left, Thumbnail, Right } from 'native-base';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const AnimatedIcon = Animatable.createAnimatableComponent(Feather)
const AnimatedIonicons = Animatable.createAnimatableComponent(Ionicons)
const AnimatedFontAwesome = Animatable.createAnimatableComponent(FontAwesome)
const AnimatedMaterialCommunityIcons = Animatable.createAnimatableComponent(MaterialCommunityIcons)



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
            <SafeAreaView style={{ flex: 1 }}>
                <LinearGradient colors={['#100E13', '#100E13']} style={{ flex: 1 }}>
                    <View style={{ margin: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <AnimatedIonicons
                                    name="ios-arrow-back"
                                    color="#0080ff"
                                    size={30}
                                    style={{ marginRight: 5 }}
                                />
                                <Text style={{ color: '#0080ff', marginTop: 3 }}>Contacts</Text>
                            </View>
                            <Text style={{ color: '#0080ff', marginTop: 3 }}>Edit</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#A7ADBD', height: 100, width: 100, borderRadius: 50 }}>
                                <Text style={{ fontSize: 50, color: '#fff', textAlign: 'center' }}>A</Text>
                            </View>
                        </View>
                        <Text style={{ color: '#fff', textAlign: 'center', marginTop: 15, fontSize: 26 }}>
                            ABC DE
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', margin: 10 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{
                                    backgroundColor: '#0186ff', height: 50, width: 50, justifyContent: 'center', alignItems: 'center',
                                    borderRadius: 50
                                }}>
                                    <AnimatedMaterialCommunityIcons
                                        name="chat"
                                        color="#fff"
                                        size={30}
                                    />
                                </View>
                                <Text style={{ color: '#0186ff', fontSize: 14 }}>message</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{
                                    backgroundColor: '#0186ff', height: 50, width: 50, justifyContent: 'center',
                                    borderRadius: 50, alignItems: 'center'
                                }}>
                                    <AnimatedIonicons
                                        name="ios-call"
                                        color="#fff"
                                        size={30}
                                    />
                                </View>
                                <Text style={{ color: '#0186ff', fontSize: 14 }}>mobile</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{
                                    backgroundColor: '#0186ff', height: 50, width: 50, justifyContent: 'center',
                                    borderRadius: 50, alignItems: 'center'
                                }}>
                                    <AnimatedMaterialCommunityIcons
                                        name="video"
                                        color="#fff"
                                        size={30}
                                    />
                                </View>
                                <Text style={{ color: '#0186ff', fontSize: 14 }}>video</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{
                                    backgroundColor: '#0186ff', height: 50, width: 50, justifyContent: 'center',
                                    borderRadius: 50, alignItems: 'center'
                                }}>
                                    <AnimatedIonicons
                                        name="ios-mail"
                                        color="#fff"
                                        size={30}
                                    />
                                </View>
                                <Text style={{ color: '#0186ff', fontSize: 14 }}>mail</Text>
                            </View>
                            {/* <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{
                                    backgroundColor: '#0186ff', height: 50, width: 50, justifyContent: 'center',
                                    borderRadius: 50, alignItems: 'center'
                                }}>
                                    <AnimatedFontAwesome
                                        name="dollar"
                                        color="#fff"
                                        size={30}
                                    />
                                </View>
                                <Text style={{ color: '#0186ff', fontSize: 14 }}>pay</Text>
                            </View> */}
                        </View>
                        <ScrollView>
                            <View style={{ padding: 10, borderBottomColor: '#202025', borderBottomWidth: 1 }}>
                                <Text style={{ color: '#fff', fontSize: 14 }}>mobile</Text>
                                <Text style={{ color: '#0186ff', fontSize: 15 }}>(347) 787-345-765</Text>
                            </View>
                            <View style={{ padding: 10, paddingBottom: 50, borderBottomColor: '#202025', borderBottomWidth: 1 }}>
                                <Text style={{ color: '#fff', fontSize: 14 }}>Notes</Text>
                            </View>
                            <View style={{ padding: 10, borderBottomColor: '#202025', borderBottomWidth: 1 }}>
                                <Text style={{ color: '#0186ff', fontSize: 16 }}>Send Message</Text>
                            </View>
                            <View style={{ padding: 10, borderBottomColor: '#202025', borderBottomWidth: 1 }}>
                                <Text style={{ color: '#0186ff', fontSize: 16 }}>Share Contact</Text>
                            </View>
                            <View style={{ padding: 10, borderBottomColor: '#202025', borderBottomWidth: 1 }}>
                                <Text style={{ color: '#0186ff', fontSize: 16 }}>Add to Favorites</Text>
                            </View>
                            {/* <View style={{ padding: 10, borderBottomColor: '#202025', borderBottomWidth: 1 }}>
                                <Text style={{ color: '#FC3F3C', fontSize: 16 }}>Add to Emergency Contacts</Text>
                            </View> */}
                            <View style={{ padding: 10, borderBottomColor: '#202025', borderBottomWidth: 1 }}>
                                <Text style={{ color: '#0186ff', fontSize: 16 }}>Share my Location</Text>
                            </View>
                        </ScrollView>
                    </View>
                </LinearGradient>
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