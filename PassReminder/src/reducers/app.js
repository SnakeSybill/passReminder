import {
    TEST,
    SELECIONAR_ACESSO,
    MODIFICA_NOVO_ACESSO,
    ADICIONAR_ACESSO,
    EXCLUIR_ACESSO,
    VISUALIZACAO_AUTORIZADA,
    AUTORIZACAO_VISUALIZAR
} from './../actions/types';
import { registros } from './../../resources/registros-real';
import { Alert } from 'react-native';

const acessoVazio = {
    nome: '',
    login: '',
    senha: ''
}

const INITIAL_STATE = {
    usuario: {
        nome: 'Igor',
        acessos: registros
    },
    acessoSelecionado: null,
    novoAcesso: {
        nome: '',
        login: '',
        senha: ''
    },
    autorizacaoVisualizar: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case TEST:
            return state;

        case SELECIONAR_ACESSO:
            return { ...state, acessoSelecionado: action.payload };

        case MODIFICA_NOVO_ACESSO:
            return { ...state, novoAcesso: action.payload }

        case ADICIONAR_ACESSO:
            var novoUsuario = state.usuario;
            novoUsuario.acessos.push(state.novoAcesso);
            return { ...state, usuario: novoUsuario, novoAcesso: acessoVazio };

        case EXCLUIR_ACESSO:
            var novoUsuario = state.usuario;
            novoUsuario.acessos.pop(state.acessoSelecionado);
            return { ...state, usuario: novoUsuario, acessoSelecionado: acessoVazio };

        case VISUALIZACAO_AUTORIZADA:
            Alert.alert(
                'Sua senha é:',
                state.acessoSelecionado.senha,
                [
                    { text: 'OK', onPress: () => { } },
                ],
            );
            return { ...state, autorizacaoVisualizar: false }
        
        case AUTORIZACAO_VISUALIZAR:
            return { ...state, autorizacaoVisualizar: action.payload }
        default:
            return state;
    }
    return state;
}