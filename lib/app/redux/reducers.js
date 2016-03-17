
import { combineReducers as Combine } from 'redux';
import { routerReducer as RouterReducer } from 'react-router-redux';

const reducers = Combine({
    routing: RouterReducer
});

export default reducers;
