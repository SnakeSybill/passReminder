import {
    TEST,
    SELECIONAR_ACESSO
} from './types';

export const appTest = () => (
    {
        type: TEST,
        payload: {},
    }
)

export const setAcessoSelecionado = (acesso, navigation) => {
    debugger;
    return dispatch => {
        dispatchVisualizar(dispatch, acesso, navigation);
    }
}

function dispatchVisualizar(dispatch, acesso, navigation) {
    
    debugger;
    dispatch({
    type: SELECIONAR_ACESSO,
        payload: acesso,
    });
    debugger;
    navigation.navigate("visualizar");
}