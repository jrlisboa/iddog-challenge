import {
    takeEvery,
    put,
    call,
} from 'redux-saga/effects';
import { Actions } from './constants';
import { post } from '../../../utils/request';

async function signup(credentials) {
    const { email } = credentials;
    const payload = { email };

    const { json } = await post('/signup', { payload });

    const { user } = json;
    return (user || {}).token;
}

export function* handleSignin({ params }) {
    try {
        yield put({ type: Actions.SIGNUP_REQUEST });
        const token = yield call(signup, params);
        return yield put({
            type: Actions.SIGNUP_SUCCESS,
            token,
        });
    }
    catch (error) {
        return yield put({
            type: Actions.SIGNUP_ERROR,
            error,
        });
    }
}

export default [
    takeEvery(Actions.SIGNUP, handleSignin),
];
