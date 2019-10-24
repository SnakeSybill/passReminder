import {
    TEST,
    SELECIONAR_ACESSO,
    MODIFICA_NOVO_ACESSO,
    ADICIONAR_ACESSO,
    EXCLUIR_ACESSO  
} from './../actions/types';
import { registros } from './../../resources/registros-real';

const acessoVazio =  {
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
    }
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
            debugger;
            return { ...state, usuario: novoUsuario, novoAcesso: acessoVazio};

        case EXCLUIR_ACESSO:
            var novoUsuario = state.usuario;
            novoUsuario.acessos.pop(state.acessoSelecionado);
            return { ...state, usuario: novoUsuario, acessoSelecionado: acessoVazio};

        default:
            return state;
    }
    return state;
}