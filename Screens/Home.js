import React from 'react';
import { View, Dimensions, Text, Platform, ScrollView, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Card, CardItem, Body, Button } from 'native-base'
import { connect } from 'react-redux';
import { Icon, Badge, ListItem } from 'react-native-elements';
import FeatherIcon from "react-native-feather1s";
import Timeline from './ListViewData'
import { mainSidebar } from '../Redux/actions/authActions'
// import { DrawerActions } from 'react-navigation/src/routers/';





class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: Dimensions.get('window').width,
            screenHeight: Dimensions.get('window').height,
            items: {},
            data: [
                { time: '09:00', title: 'Project Daily stand-up', meetTime: '09:00 AM to 09:30 AM' },
                { time: '10:45', title: 'Project Daily stand-up', meetTime: '09:00 AM to 09:30 AM' },
                { time: '12:00', title: 'Project Daily stand-up', meetTime: '09:00 AM to 09:30 AM' },
                { time: '14:00', title: 'Project Daily stand-up', meetTime: '09:00 AM to 09:30 AM' },
                { time: '16:30', title: 'Project Daily stand-up', meetTime: '09:00 AM to 09:30 AM' }
            ],
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
            ],
            list: [
                {
                    title: 'Amy Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Vice President'
                },
                {
                    title: 'Chris Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Vice Chairman'
                },
            ]
        }
        this._renderItem = this._renderItem.bind(this)
    }

    componentDidMount() {
        console.log('this', this.props)
    }

    componentWillMount() {
        this.props.mainSidebar(false)
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
                                <View style={{ flex: 7 }}>
                                    <Text style={{ fontSize: 14 }}>{item.title}</Text>
                                    <Text style={{ color: '#979797' }}>{item.time}</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                        <Image
                                            source={require('../assets/images/Bitmap.png')}
                                        />
                                        <Image
                                            source={require('../assets/images/Bitmap.png')}
                                        />
                                        <Image
                                            source={require('../assets/images/Bitmap.png')}
                                        />
                                        <Image
                                            source={require('../assets/images/Bitmap.png')}
                                        />
                                    </View>
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
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ position: 'absolute', bottom: 30, right: 0, width: 100, height: 100 }}>
                    <Button light style={{ backgroundColor: '#FF7052', justifyContent: 'center', alignItems: 'center', borderRadius: 50, height: 70, width: 70 }}
                        onPress={() => console.log("Hello")}
                    >
                        <Icon
                            name="add"
                            iconStyle={{ fontSize: 32 }}
                            color="white" />
                    </Button>
                </View>
                <Card style={{ paddingBottom: 20 }}>
                    <View style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 10, justifyContent: 'space-between', alignItems: 'center', paddingRight: 10 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <FeatherIcon
                                name="arrow-left"
                                size={40}
                                // thin={true}
                                iconStyle={{ width: 200 }}
                            />
                        </TouchableOpacity>
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
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Meetings</Text>
                            <Badge value="4" status="success" badgeStyle={{ backgroundColor: '#7540EE', paddingRight: 5, paddingLeft: 5 }}
                            />
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
                </Card>
                <ScrollView style={{ flex: 1 }}>
                    <Timeline
                        data={this.state.data}
                        timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
                        timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13 }}
                        // descriptionStyle={{ color: 'gray', backgroundColor: 'blue' }}
                        detailContainerStyle={{ backgroundColor: '#E9F9F0', marginBottom: 10, borderRadius: 10 }}
                        titleStyle={{ color: 'blue' }}
                    />
                </ScrollView>
            </SafeAreaView>
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
    // console.log("mapToState", state.authReducer)
    return {
        user: "state.authReducer.user",
        main: state.authReducer.main
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        mainSidebar: (main) => dispatch(mainSidebar(main))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
