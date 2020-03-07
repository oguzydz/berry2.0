//redux bileşenleri import ediliyor.
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

// Persist data için gerekli kütüphane ve storage import ediliyor. 
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from 'redux-persist';


// Reducer'ı import ediliyor.
import todosReducers from './reducers/todosReducers';
import themeReducers from './reducers/themeReducers';
import analyticsReducers from './reducers/analyticsReducers';

// Reducer'lar combine ediliyor.
const rootReducer = combineReducers({
    todos: todosReducers,
    theme: themeReducers,
    analytics: analyticsReducers,
})


// redux-persist ayarları
const persistConfig = {
    // key: "root",
    // key: "v1",
    key: "v1.2",
    debug: true,
    storage,
}

// kalıcı data ile reducer'ları combine ediyor.
const persistedReducer = persistReducer(persistConfig, rootReducer);

// store ve kalıcıtör export ediliyor.
export let store = createStore(persistedReducer, applyMiddleware(thunk))
export let persistor = persistStore(store)