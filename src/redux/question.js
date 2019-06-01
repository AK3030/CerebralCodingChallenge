//actions
export const incrementQuestion = () => {
    return {
        type: 'INCREMENT_QUESTION',
    }
};

export const setQuestion = (questionId) => {

    return {
        type: 'SET_QUESTION',
        questionId
    }
}

export const putAnswerAction = (answer, id, nextQuestion) => dispatch => {
    return putAnswer(answer, id)
        .then(response => {

            return response.json()
        },
            error => console.log('An error occurred.', error)
        )
        .then(questionId => {
            dispatch(setQuestion(nextQuestion))
        }
        )
}

//reducer
export default (state = 1, action) => {
    switch (action.type) {
        case 'INCREMENT_QUESTION':
            return state + 1;
        case 'SET_QUESTION':
            return action.questionId
        default:
            return state;
    }
}

//fetch request
export const putAnswer = (answer, id) => {
    let questionId = id;
    if (questionId === -1) {
        questionId = 9;
    }
    else if (questionId === 0) {
        questionId = 10;
    }
    let url = `https://jsonplaceholder.typicode.com/posts/${questionId}`;
    return fetch(url, {
        method: 'PUT',
        body: JSON.stringify(answer)
    })
}