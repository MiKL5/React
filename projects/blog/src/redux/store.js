import {createStore, applyMiddleWare, conbineReducers} from Redux;
import articleReducer from './articles/articleReducer'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    articleReducer
})

const store = createStore(rootReducer, applyMiddleWare(thunk))

export default store;