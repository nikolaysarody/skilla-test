import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { callsReducer } from '../../entities/header/model';
import { recordReducer } from '../../features/audio-player/model';

const rootReducer = combineReducers({
    calls: callsReducer,
    record: recordReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
