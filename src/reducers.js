import { combineReducers } from 'redux';
import auth from './features/login/store/reducer';

export default combineReducers({
    auth,
});
