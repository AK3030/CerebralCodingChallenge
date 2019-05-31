export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            console.log(state)
            return [...state, action.message]
        default:
            return state
    }
}