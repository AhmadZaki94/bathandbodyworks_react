import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import productReducer from './Products/reducer';

const rootReducer = combineReducers({projectData: productReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTESION_COMPOSE__ || compose;

export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);