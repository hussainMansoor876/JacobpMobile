import React from 'react';
import { View, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux';

class Falcon extends React.Component {
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
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 24 }}>Falcon</Text>
                    <TouchableOpacity>
                        <Icon
                            type="feather"
                            name="x"
                        />
                    </TouchableOpacity>
                </View>
                <Image
                    style={{ marginBottom: 10 }}
                    source={require('../../assets/images/falcon.png')}
                />
                <Text style={{ fontSize: 20, textAlign: 'center' }}>
                    We couldn’t find {'\n'} what you were looking for.
                </Text>
                <Text style={{ fontSize: 16, textAlign: 'center' }}>Sorry :(</Text>
            </View>
        );
    }
}

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


export default connect(mapStateToProps, mapDispatchToProps)(Falcon)
