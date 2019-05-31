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