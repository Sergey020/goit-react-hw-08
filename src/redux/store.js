import { configureStore } from "@reduxjs/toolkit";
import {contactsReducer} from "./contacts/slice"
import {filterReducer} from "./filters/slice"
import {authReducer} from "./auth/slice"
import {persistReducer, persistStore} from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};


export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filters: filterReducer,
    }
})

//middleware: (getDefaultMiddleware)=>
//getDefaultMiddleware({
//serializablleCheck: {                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //        },
  //      }})
  //});

export const persistor = persistStore(store);