
import { combineReducers as Combine } from 'redux';
import { routerReducer as RouterReducer } from 'react-router-redux';
import Counter from './counter';

const reducers = Combine({
    counter: Counter,
    routing: RouterReducer
});

export default reducers;
