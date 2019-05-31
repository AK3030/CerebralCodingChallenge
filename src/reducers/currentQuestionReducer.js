export default (state = 1, action) => {
    switch (action.type) {
        case 'INCREMENT_QUESTION':
            return state + 1;
        default:
            return state;
    }
}