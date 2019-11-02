import React from 'react';
import { View, Dimensions, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Carousel from 'react-native-snap-carousel';
import { Button, Card, CardItem, Body } from 'native-base'
import { connect } from 'react-redux';
import { Icon, Badge } from 'react-native-elements';
import FeatherIcon from "react-native-feather1s";



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: Dimensions.get('window').width,
            screenHeight: Dimensions.get('window').height,
            items: {},
            carouselItems: [
                {
                    title: "Project Daily stand-up",
                    time: "10:00 AM - 10:30 AM"
                },
                {
                    title: "Item 2",
                    time: "10:00 AM - 10:30 AM"
                },
                {
                    title: "Item 3",
                    time: "10:00 AM - 10:30 AM"
                },
                {
                    title: "Item 4",
                    time: "10:00 AM - 10:30 AM"
                },
                {
                    title: "Item 5",
                    time: "10:00 AM - 10:30 AM"
                }
            ]
        }
        this._renderItem = this._renderItem.bind(this)
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    _renderItem({ item, index }) {
        const { screenWidth } = this.state
        return (
            <View style={{ height: 120, width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 5 }}>
                <Card style={{ flex: 1, height: 150, width: '90%', flexDirection: 'row', borderRadius: 10 }}>
                    <CardItem style={{ backgroundColor: '#2DC76D', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, marginRight: -24 }}>
                    </CardItem>
                    <CardItem style={{ flex: 1, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
                        <Body>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flex: 4 }}>
                                    <Text style={{ fontSize: 16 }}>{item.title}</Text>
                                    <Text>{item.time}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Image
                                        source={require('../assets/images/Bitmap1.png')} />
                                </View>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
            </View>
        );
    }

    render() {
        const { screenHeight, screenWidth } = this.state
        return (
            <View style={{ flex: 1 }}>
                <View style={{ position: 'absolute', bottom: 30, right: 0, width: 100, height: 100 }}>
                    <Button light style={{ backgroundColor: '#FF7052', justifyContent: 'center', alignItems: 'center', borderRadius: 50, height: 70, width: 70 }}>
                        <Icon
                            name="add"
                            iconStyle={{ fontSize: 32 }}
                            color="white" />
                    </Button>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 10, justifyContent: 'space-between', alignItems: 'center', paddingRight: 10 }}>
                    <FeatherIcon
                        name="arrow-left"
                        size={40}
                        // thin={true}
                        iconStyle={{ width: 200 }}
                    />
                    <Text style={{ fontSize: 22 }}>May</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon
                            name="search"
                            type="font-awesome"
                            size={30}
                        />
                        <Image
                            style={{ width: 30, resizeMode: 'contain', height: 30, marginLeft: 15 }}
                            source={require('../assets/images/calendar.png')}
                        >
                            {/* <Badge status="success" containerStyle={{ position: 'relative' }} /> */}
                        </Image>
                    </View>
                </View>
                <View style={{ paddingTop: 20, width: screenWidth, justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 10, marginTop: 20 }}>
                    <View>
                        <Text style={{ fontSize: 24, fontWeight: 'bold'}}>Meetings</Text>
                    </View>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.carouselItems}
                        renderItem={this._renderItem}
                        sliderWidth={250}
                        itemWidth={250}
                        loop={true}
                        enableSnap={true}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
