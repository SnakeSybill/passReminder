import {
    TEST,
    SELECIONAR_ACESSO,
    MODIFICA_NOVO_ACESSO,
    ADICIONAR_ACESSO,
    EXCLUIR_ACESSO,
    VISUALIZACAO_AUTORIZADA,
    AUTORIZACAO_VISUALIZAR
} from './types';

export const autorizacaoVisualizar = autorizado => (
    {
        type: AUTORIZACAO_VISUALIZAR,
        payload: autorizado,
    }
)

export const modificaNovoAcesso = (acesso) => (
    {
        type: MODIFICA_NOVO_ACESSO,
        payload: acesso,
    }
)

export const adicionarAcesso = () => (
    {
        type: ADICIONAR_ACESSO,
        payload: {},
    }
)

export const excluirAcesso = (navigation) => {
    return dispatch => {
        dispatchExcluir(dispatch, navigation);
    }
}

export const setAcessoSelecionado = (acesso, navigation) => {
    return dispatch => {
        dispatchVisualizar(dispatch, acesso, navigation);
    }
}

function dispatchVisualizar(dispatch, acesso, navigation) {
    dispatch({
    type: SELECIONAR_ACESSO,
        payload: acesso,
    });
    navigation.navigate("visualizar");
}

function dispatchExcluir(dispatch, navigation) {
    dispatch({
    type: EXCLUIR_ACESSO,
        payload:  null,
    });
    navigation.navigate("main");
}

export const visualizacaoAutorizada = () => (
    {
        type: VISUALIZACAO_AUTORIZADA,
        payload: {},
    }
)