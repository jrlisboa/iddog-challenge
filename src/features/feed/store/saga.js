import {
    takeEvery,
    put,
    call,
    select,
} from 'redux-saga/effects';
import { Actions } from './constants';
import { get } from '../../../utils/request';

function getToken({ auth }) {
    return auth.token;
}

async function fetchFeed({ params, token }) {
    const { category } = params;
    const url = category ? `/feed?category=${category}` : '/feed';
    const { json } = await get(url, { bearer: token });

    const { list } = json;
    return list || [];
}

export function* handleFeed({ params }) {
    try {
        yield put({ type: Actions.FEED_REQUEST });
        const token = yield select(getToken);
        const list = yield call(fetchFeed, { params, token });
        return yield put({
            type: Actions.FEED_SUCCESS,
            list,
        });
    }
    catch (error) {
        return yield put({
            type: Actions.FEED_ERROR,
            error,
        });
    }
}

export default [
    takeEvery(Actions.FEED, handleFeed),
];
