import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Helmet } from 'react-helmet';
import storage from 'redux-persist/lib/storage';
import rootSaga from './sagas';
import rootReducer from './reducers';
import Router from './router';
import './ui/base.scss';

const persistConfig = {
    key: 'chalenge',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

function App() {
    return (
        <div className="portal">
            <Helmet titleTemplate="%s - Portal Terra" />
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router />
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App;
