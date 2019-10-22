import {
    TEST,
    SELECIONAR_ACESSO
} from './../actions/types';
import { registros } from './../../resources/registros';

const INITIAL_STATE = {
    usuario: {
        nome: 'Igor',
        acessos: registros
    },
    acessoSelecionado: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case TEST:
            return state;

        case SELECIONAR_ACESSO: 
            debugger;
            return {...state, acessoSelecionado: action.payload }
        default:
            return state;
    }
    return state;
}