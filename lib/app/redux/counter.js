
const initialState = {
    count: 0
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return Object.assign({}, state, {count: ++state.count});
        case 'SUB':
            return Object.assign({}, state, {count: --state.count});
        default:
            return Object.assign({}, state);
    }
};

export default counter;
