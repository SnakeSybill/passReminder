import React, { Component } from 'react';
import { View, Text, Alert, ViewPropTypes, Image, TouchableOpacity } from 'react-native';
import { styles } from './style.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import { Overlay } from 'react-native-elements'
import { autorizacaoVisualizar, visualizacaoAutorizada } from './../../actions/app';

class Fingerprint extends Component {

    constructor(props) {
        super(props);
        this.state = { errorMessage: null };
    }

    componentDidMount() {
        FingerprintScanner
            .authenticate({ onAttempt: this.handleAuthenticationAttempted })
            .then(() => {
                this.props.autorizacaoVisualizar(true);
                this.props.visualizacaoAutorizada();
                this.props.handlePopupDismissed();                
            })
            .catch((error) => {
                this.props.autorizacaoVisualizar(false);
                this.setState({ errorMessage: error.message });
            });
    }

    componentWillUnmount() {
        
        FingerprintScanner.release();
    }

    handleAuthenticationAttempted = (error) => {
        this.setState({ errorMessage: error.message });
    };

    render() {

        const { errorMessage } = this.state;
        const { style, handlePopupDismissed } = this.props;

        return (

            <Overlay
                style={styles.container}
                isVisible
                width="auto"
                height="auto">
                <View style={styles.contentContainer}>

                    <Text style={styles.tituloModal}>Autenticação por digital</Text>
                    <Image
                        style={styles.logo}
                        source={require('./../../../resources/fingerprint.png')}
                    />
                    {this.state.errorMessage && (
                        <Text>
                            Develve esse celular pro dono, rapá...
                        </Text>
                    )}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={handlePopupDismissed}>
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </Overlay>
        );
    }
}

Fingerprint.propTypes = {
    style: ViewPropTypes.style,
    handlePopupDismissed: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
    {
    }
)

export default connect(mapStateToProps,
    {
        autorizacaoVisualizar, visualizacaoAutorizada
    })(Fingerprint);
