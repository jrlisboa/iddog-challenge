import { createReducer } from '../../../utils/reduxHelper';
import { Actions, State } from './constants';

const initialState = {
    state: State.IDLE,
    authorized: false,
    token: undefined,
    error: undefined,
};

function handleSigninRequest(state) {
    return {
        ...state,
        state: State.REQUESTING,
        loading: true,
    };
}

function handleSigninSuccess(state, { token }) {
    return {
        ...state,
        state: State.SUCCESS,
        authorized: true,
        loading: false,
        ...token,
    };
}

function handleSigninError(state, { error }) {
    return {
        ...state,
        state: State.ERROR,
        loading: false,
        error,
    };
}

export default createReducer({
    ...initialState,
},
{
    [Actions.SIGNIN_REQUEST]: handleSigninRequest,
    [Actions.SIGNIN_SUCCESS]: handleSigninSuccess,
    [Actions.SIGNIN_ERROR]: handleSigninError,
});
