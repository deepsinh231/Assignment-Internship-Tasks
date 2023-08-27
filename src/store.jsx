import { createStore } from 'redux';
import rootReducer  from './redux/Reducers/main';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig,rootReducer )
const Store = createStore(
    persistedReducer
);
export let persistor = persistStore(Store)
export default Store;