import { combineReducers} from 'redux';
import authentication from './authentication';
import app from './app';

export default combineReducers({
    authentication,
    app, 
})