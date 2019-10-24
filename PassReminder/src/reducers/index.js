import { combineReducers } from 'redux';
import authentication from './authentication';
import app from './app';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import ReduxThunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}
const reducers = combineReducers({
    authentication,
    app,
});

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);

export { store, persistor }