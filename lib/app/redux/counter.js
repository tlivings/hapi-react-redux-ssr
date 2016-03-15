
const initialState = {
    counter: 0
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return Object.assign({}, state, {counter: ++state.counter});
        case 'SUB':
            return Object.assign({}, state, {counter: --state.counter});
        default:
            return Object.assign({}, state);
    }
};

export default app;
