import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Text } from 'react-native';
import { styles } from './style.js';
import { modificaNovoAcesso, adicionarAcesso } from './../../actions/app';
import { TextInput } from 'react-native-gesture-handler';

class Adicionar extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Adicionar',
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTintColor: '#fff',
        }
    }


    constructor(props) {
        super(props);
    }

    adicionarAcesso() {
        this.props.adicionarAcesso(this.props.navigation);
    }

    renderBotaoAdicionar() {
        return (<View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "flex-end" }}>
            <Button
                onPress={() => { this.adicionarAcesso() }}
                title="Adicionar"
                color="#000"
                style={{ heigth: 30 }}
            />
        </View>);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Text>Novo acesso</Text>
                </View>
                <View style={{ flex: 8, alignItems: "center", alignContent: "center", justifyContent: "center", alignSelf: "center" }}>
                    <TextInput placeholder="Nome" maxLength={100} value={this.props.novoAcesso.nome} onChangeText={nome => this.props.modificaNovoAcesso({ ...this.props.novoAcesso, nome })} />
                    <TextInput placeholder="Login" maxLength={100} value={this.props.novoAcesso.login} onChangeText={login => this.props.modificaNovoAcesso({ ...this.props.novoAcesso, login })} />
                    <TextInput placeholder="Senha" maxLength={100} value={this.props.novoAcesso.senha} onChangeText={senha => this.props.modificaNovoAcesso({ ...this.props.novoAcesso, senha })} />
                </View>
                {
                    this.renderBotaoAdicionar()
                }
            </View>
        )
    }
}

const mapStateToProps = state => (
    {
        novoAcesso: state.app.novoAcesso,
    }
)

export default connect(mapStateToProps,
    {
        modificaNovoAcesso,
        adicionarAcesso,

    })(Adicionar);