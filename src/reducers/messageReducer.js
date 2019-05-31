import questionData from '../questionData';

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [...state, action.message]
        case 'SET_QUESTION':
            console.log('q id', action);
            let questionBody = questionData.find( question => question.id === action.questionId).question;
            let message = {user: 'Cerebral', body: questionBody}
            return [...state, message]
        default:
            return state
    }
}