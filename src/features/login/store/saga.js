import {
    takeEvery,
    put,
    call,
} from 'redux-saga/effects';
import { Actions } from './constants';
import { post } from '../../../utils/request';

async function signin(credentials) {
    const { email } = credentials;
    const payload = { email };

    const { json } = await post('/signup', { payload });

    const { user } = json;
    return (user || {}).token;
}

export function* handleSignin({ params }) {
    try {
        yield put({ type: Actions.SIGNIN_REQUEST });
        const token = yield call(signin, params);
        return yield put({
            type: Actions.SIGNIN_SUCCESS,
            token,
        });
    }
    catch (error) {
        return yield put({
            type: Actions.SIGNIN_ERROR,
            error,
        });
    }
}

export default [
    takeEvery(Actions.SIGNIN, handleSignin),
];
