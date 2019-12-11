import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { styles } from './style.js';
import { excluirAcesso, autorizacaoVisualizar, visualizacaoAutorizada } from './../../actions/app';
import Fingerprint from './../fingerPrint/fingerPrint';

class Visualizar extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Visualizar Acesso',
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTintColor: '#fff',
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            errorMessage: undefined,
            biometric: undefined,
            popupShowed: false
        };
    }

    excluir() {
        this.props.excluirAcesso(this.props.navigation);
    }

    handleFingerprintDismissed = () => {
        this.setState({ popupShowed: false });

        if (!this.props.autorizacaoVisualizar)
            this.props.visualizacaoAutorizada();
    };

    handleFingerprintShowed() {
        this.setState({ popupShowed: true });
    };


    render() {
        const { errorMessage, biometric, popupShowed } = this.state;

        return (
            < View style={styles.container} >
                <View style={{ flex: 2, alignItems: "center", alignContent: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: 32 }}>{this.props.acessoSelecionado.nome}</Text>
                </View>
                <View style={{ flex: 3, alignItems: "center", alignContent: "space-around", justifyContent: "space-around", alignSelf: "center" }}>
                    <Text style={{ fontSize: 24 }}><Text style={{ fontStyle: "italic" }}>Login: </Text>{this.props.acessoSelecionado.login}</Text>
                    <Button title='Ver senha?' onPress={() => {
                        this.handleFingerprintShowed();
                    }
                    } color="#000" />

                    {errorMessage && (
                        <Text style={styles.errorMessage}>
                            {errorMessage} {biometric}
                        </Text>
                    )}

                    {popupShowed && (
                        <Fingerprint
                            style={styles.popup}
                            handlePopupDismissed={this.handleFingerprintDismissed}
                        />
                    )}

                </View>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "flex-end" }}>

                    <Button title='Alterar' onPress={() => {
                        Alert.alert(
                            'Calma lá...',
                            'Não implementado ainda',
                            [
                                { text: 'OK', onPress: () => { } },
                            ],
                        )
                    }
                    } color="#000" />
                    <Button title='Excluir' onPress={() => {
                        Alert.alert(
                            'Excluir acesso?',
                            'Está certo disso?',
                            [
                                { text: 'NÃO! Tá doido?', onPress: () => { } },
                                { text: 'Sim, excluir', onPress: () => { this.excluir() } },
                            ],
                        )
                    }}
                        color="#000" />
                </View>
            </View >
        )
    }
}

const mapStateToProps = state => (
    {
        acessoSelecionado: state.app.acessoSelecionado,
        autorizacaoVisualizar: state.app.autorizacaoVisualizar
    }
)

export default connect(mapStateToProps,
    {
        excluirAcesso,
        autorizacaoVisualizar,
        visualizacaoAutorizada
    })(Visualizar);