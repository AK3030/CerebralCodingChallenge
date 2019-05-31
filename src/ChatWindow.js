import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import styled from 'styled-components';
import fetchJsonp from 'fetch-jsonp';
import questionData from './questionData';
import { addMessage } from './actions/messageAction';
import { setQuestion, incrementQuestion, putAnswerAction, putAnswer } from './actions/currentQuestionActions'
import validateQuestion from './validateQuestion';
import Plane from './paperairplane.png'


console.log("questionData", questionData);

const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 45%;

`

const TitleBar = styled.div`
    width: 100%;
    flex-grow: 2;
    background-color: #ECF5F6;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 20px;
`

const MessageWindow = styled.div`
    height: 50%;
    width: 100%;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    box-sizing: border-box;
    padding-right: 20px;
    background-color: white;
`

const MessageInputContainer = styled(TitleBar)`
    flex-grow: 3;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const MessageInput = styled.textarea`
    height: 80%;
    width: 70%;
    resize: none;
    border-radius: 3px;
    border-color: #DDE4ED;
`

const Message = styled.div`
    width: auto;
    height: auto;
`

const SendMessageButton = styled.div`
    background-color: #5294FC;
    height: 60%;
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
`

const BottomScroll = styled.div`

`

const PaperAirplaneImage = styled.img`
  width: 50%;
  filter: invert(100%);
`

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //start at question 0 on window load
  componentDidMount() {
    this.scrollToBottom();
    this.props.setQuestion(6);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  // sendQuestion = () => {
  //   this.currentQuestion = questionData.find((questionObj) => questionObj.id === this.props.currentQuestion)
  //   this.props.addMessage({user: 'Cerebral', body: this.currentQuestion.question})
  // }
  //scroll to bottom of chat
  scrollToBottom = () => {

    this.bottomOfMessages.scrollIntoView();
  }

  updateMessage = (e) => {
    const message = e.target.value
    this.setState((prevSate, props) => ({ message: message }))
  }

  clearInput = () => {
    this.setState(prevSate => ({ message: "" }))
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
      this.props.addMessage({ user: 'Cerebral', body: 'Invalid Answer, try again' });
    }

    this.clearInput()
  }

  render() {

    return (
      <Main>

        <TitleBar>Cerebral</TitleBar>
        <MessageWindow>
          {this.props.messages.map((message, index) => <div key={index}>{message.user + ": " + message.body}</div>)}
          <BottomScroll ref={el => { this.bottomOfMessages = el }}></BottomScroll>
        </MessageWindow>
        <MessageInputContainer>
          <MessageInput value={this.state.message} onChange={this.updateMessage}></MessageInput>
          <SendMessageButton onClick={this.sendMessage}>
            <PaperAirplaneImage src={Plane}/>
          </SendMessageButton>
        </MessageInputContainer>
      </Main>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  currentQuestion: state.currentQuestion,
})

const mapDispatchToProps = dispatch => ({
  addMessage: (message) => dispatch(addMessage(message)),
  setQuestion: (id) => dispatch(setQuestion(id)),
  putAnswerAction: (answer, id, nextQuestion) => dispatch(putAnswerAction(answer, id, nextQuestion))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);