import { combineReducers } from 'redux';
import messageReducer from '../reducers/messageReducer';
import currentQuestionReducer from './question';
export default combineReducers({
    messages: messageReducer,
    currentQuestion: currentQuestionReducer
});