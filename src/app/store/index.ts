import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { callsReducer } from '../../entities/header/model';

const rootReducer = combineReducers({
    calls: callsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
