import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {foodAPI} from "../services/foodAPI";
import basketReducer from './reducers/basketSlice'

const rootReducer = combineReducers({
    [foodAPI.reducerPath]: foodAPI.reducer,
    basket: basketReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];