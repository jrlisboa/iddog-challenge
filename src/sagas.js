import { all } from 'redux-saga/effects';
import auth from './features/login/store/saga';

export default function* rootSaga() {
    yield all([
        ...auth,
    ]);
}
