import React from 'react';
import { View, Dimensions, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { Button } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux';



class Manage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: Dimensions.get('window').width,
            screenHeight: Dimensions.get('window').height
        }
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        const { screenHeight, screenWidth } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: '#1C162E' }}>
                <LinearGradient colors={['#1C162E', '#1C162E']} style={styles.linearGradient}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <TouchableOpacity>
                                <Text style={styles.buttonText}>Hello</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.buttonText}>Hello</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}


var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
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

export default connect(mapStateToProps, mapDispatchToProps)(Manage)

