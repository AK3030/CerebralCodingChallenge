import questionData from '../questionData';

//actions
export const addMessage = message => {
    return {
        type: 'ADD_MESSAGE',
        message
    }
};

//reducer
export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [...state, action.message]
        case 'SET_QUESTION':
            let questionBody = questionData.find( question => question.id === action.questionId).question;
            let message = {user: 'Cerebral', body: questionBody}
            return [...state, message]
        default:
            return state
    }
}