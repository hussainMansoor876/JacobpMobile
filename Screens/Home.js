import React from 'react';
import { View, Dimensions, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { Button } from 'native-base'
import { connect } from 'react-redux';
import { Icon, Badge } from 'react-native-elements';
import FeatherIcon from "react-native-feather1s";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: Dimensions.get('window').width,
            screenHeight: Dimensions.get('window').height,
            items: {}
        }
    }

    componentDidMount() {
        SplashScreen.hide();
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
