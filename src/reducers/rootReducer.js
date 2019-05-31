import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import currentQuestionReducer from './currentQuestionReducer';
export default combineReducers({
    messages: messageReducer,
    currentQuestion: currentQuestionReducer
});