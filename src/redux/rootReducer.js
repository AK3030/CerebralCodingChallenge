import { combineReducers } from 'redux';
import messageReducer from './message';
import currentQuestionReducer from './question';
export default combineReducers({
    messages: messageReducer,
    currentQuestion: currentQuestionReducer
});