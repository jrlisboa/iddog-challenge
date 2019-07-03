import { all } from 'redux-saga/effects';
import auth from './features/signup/store/saga';
import feed from './features/feed/store/saga';

export default function* rootSaga() {
    yield all([
        ...auth,
        ...feed,
    ]);
}
