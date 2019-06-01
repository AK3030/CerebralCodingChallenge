import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import styled from 'styled-components';
import questionData from './questionData';
import validateQuestion from './validateQuestion';
import Plane from './paperairplane.png';
import { addMessage } from './redux/message';
import { putAnswerAction } from './redux/question';

const MessageInputContainer = styled.div`
    width: 100%;
    background-color: #ECF5F6;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-weight: 600;
    color: #5D6979;
    flex-grow: 3;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
`

const MessageInput = styled.textarea`
    height: 55%;
    width: 70%;
    resize: none;
    border-radius: 3px;
    border-color: #DDE4ED;
    color: #CBD3DC;
    font-size: 15px;
    font-weight: 600;
    padding-left: 10px;
    box-sizing: border-box;
    flex-grow: 1;
    padding-top: 8px;
    &::placeholder {
      color: #CBD3DC;
      font-size: 15px;
      font-weight: 600;
    }
`

const SendMessageButton = styled.div`
    background-color: #5294FC;
    height: 55%;
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
    margin-left: 12px;
`

const PaperAirplaneImage = styled.img`
  width: 28%;
  filter: invert(100%);
`

class MessageInputBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    //add user message to chat window/redux and validate after 
    sendMessage = () => {
        this.props.addMessage({ user: 'Me', body: this.state.message });
        let currentFullQuestion = questionData.find(question => question.id === this.props.currentQuestion)
        let userMessage = this.state.message
        let validAnswer = validateQuestion(userMessage, currentFullQuestion);
        if (validAnswer) {
            //if valid answer then send to server
            this.props.putAnswerAction(validAnswer, currentFullQuestion.id, validAnswer);
        }
        else {
            // if invalid answer tell user to try again
            let invalidMessage = 'Invalid Answer, try again.';
            if (Array.isArray(currentFullQuestion.validation)) {
                var options = currentFullQuestion.validation.join(", ");
                
                invalidMessage += ` Options: ${options}`;
            }
            console.log(invalidMessage);
            this.props.addMessage({ user: 'Cerebral', body: invalidMessage});
        }

        this.clearInput();
    }

    clearInput = (e) => {
        this.setState(prevSate => ({ message: "" }))
    }

    updateMessage = (e) => {
        const message = e.target.value;
        this.setState((prevSate, props) => ({ message: message }))
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.sendMessage();
        }
    }

    render() {
        return (
            <MessageInputContainer>
                <MessageInput ref={el => { this.messageInput = el }}
                    placeholder="Type here..."
                    onKeyPress={this.handleKeyPress}
                    value={this.state.message}
                    onChange={this.updateMessage} />
                <SendMessageButton onClick={this.sendMessage}>
                    <PaperAirplaneImage src={Plane} />
                </SendMessageButton>
            </MessageInputContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    currentQuestion: state.currentQuestion,
})

const mapDispatchToProps = dispatch => ({
    addMessage: (message) => dispatch(addMessage(message)),
    putAnswerAction: (answer, id, nextQuestion) => dispatch(putAnswerAction(answer, id, nextQuestion))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageInputBar);