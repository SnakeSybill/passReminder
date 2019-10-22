import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';

class Login extends Component {

    static navigationOptions = {
        title: 'Login',
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        return (
                <View>
                    <Button title="Login" color="#000" />
                </View>
        );
    }
}

const mapStateToProps = state => (
    {
    }
)

export default connect(mapStateToProps,
    {
    })(Login);