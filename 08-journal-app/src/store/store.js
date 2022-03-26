import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';

const reducers = combineReducers({
    auth: authReducer
})

export const store = createStore(
    reducers,
    composeWithDevTools()
);