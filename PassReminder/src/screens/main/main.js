import React, { Component } from 'react';
import { connect } from 'react-redux';
import { appTest } from './../../actions/app';
import { View, Text, TouchableOpacity, Button, Alert } from 'react-native';
import { styles } from './style.js';
import { setAcessoSelecionado } from './../../actions/app';

class Main extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Início',
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTintColor: '#fff',
        }
    }

    constructor(props) {
        super(props);
    }

    verAcesso(item) {
        this.props.setAcessoSelecionado(item, this.props.navigation);
    }

    renderBotaoAdicionar() {
        return(<View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "flex-end" }}>
            <Button
                onPress={() => this.props.navigation.navigate('adicionar')}
                title="Adicionar"
                color="#000"
                style={{ heigth: 30 }}
            />
        </View>);
    }

    render() {
        if (this.props.usuario.acessos.length == 0) {
            return (
                <View style={styles.container}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 8, alignItems: "center", alignContent: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 18}}>Você ainda não possui acessos cadastrados</Text>
                    </View>
                    {
                        this.renderBotaoAdicionar()
                    }
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <View style={{ flex: 1, alignContent: "center", paddingVertical: 15 }}>
                        <Text style={{ fontSize: 18, paddingHorizontal: 20, color: "#000" }}>Acessos de {this.props.usuario.nome}</Text>
                    </View>
                    <View style={{
                        flex: 8, justifyContent: 'flex-start',
                        alignItems: 'center',
                        backgroundColor: '#FFFFFF',
                    }}>
                        {
                            this.props.usuario.acessos.map((item, i) => (

                                <View style={{ flexDirection: "row" }} key={i}>
                                    <TouchableOpacity onPress={() => this.verAcesso(item)} style={{ flex: 1, height: 50, borderColor: '#d6d7da', alignContent: "flex-start" }}>
                                        <Text style={{ fontSize: 16, paddingHorizontal: 20 }}>{item.nome}</Text>

                                    </TouchableOpacity>
                                </View>
                            ))
                        }
                    </View>
                    {this.renderBotaoAdicionar()}
                </View>
            )
        }
    }
}

const mapStateToProps = state => (
    {
        usuario: state.app.usuario,
    }
)

export default connect(mapStateToProps,
    {
        appTest,
        setAcessoSelecionado
    })(Main);