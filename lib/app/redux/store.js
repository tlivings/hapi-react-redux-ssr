
import { createStore as CreateStore } from 'redux';
import Reducers from './reducers';

const createStore = (initialState = {}) => {
    return CreateStore(Reducers, initialState);
};

export default createStore;
