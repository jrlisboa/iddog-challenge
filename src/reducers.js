import { combineReducers } from 'redux';
import auth from './features/login/store/reducer';
import feed from './features/feed/store/reducer';

export default combineReducers({
    auth,
    feed,
});
