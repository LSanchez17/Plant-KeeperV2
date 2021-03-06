import {persistStore, persistReducer} from 'redux-persist';
import {createStore, applyMiddleware} from 'redux';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import root from '../redux/reducers/rootReducer';

const persistConfig = {
    key: 'root',
    storage, 
    stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, root);

export const store = createStore(
    persistedReducer,
    applyMiddleware(thunk),
);

export const persistedStore = persistStore(store);