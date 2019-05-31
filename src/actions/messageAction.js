export const addMessage = message => {
    console.log("hellooo", message)
    return {
        type: 'ADD_MESSAGE',
        message
    }
};