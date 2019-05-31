import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import fetchJsonp from 'fetch-jsonp';
import questionData from './questionData';
import { addMessage } from './redux/message';
import { setQuestion, incrementQuestion, putAnswerAction, putAnswer } from './redux/question'
import validateQuestion from './validateQuestion';
import Plane from './paperairplane.png'
import Message from './Message';
import BrainIcon from './brainicon.png';

const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 45%;
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.25);
`

const TitleBar = styled.div`
    width: 100%;
    flex-grow: 2;
    background-color: #ECF5F6;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 20px;
    font-weight: 600;
    color: #5D6979;
`

const MessageWindow = styled.div`
    height: 50%;
    width: 100%;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-right: 20px;
    padding-left: 20px;
    background-color: white;
`

const MessageInputContainer = styled(TitleBar)`
    flex-grow: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
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

const BottomScroll = styled.div`

`

const PaperAirplaneImage = styled.img`
  width: 28%;
  filter: invert(100%);
`

const BrainImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 5px;
  border: 1px solid green;
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
    this.props.setQuestion(0);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {

    this.bottomOfMessages.scrollIntoView();
  }

  updateMessage = (e) => {
    const message = e.target.value;
    console.log('message', message)
    this.setState((prevSate, props) => ({ message: message }))
  }

  clearInput = (e) => {
    this.setState(prevSate => ({ message: ""}))
    console.log("clear input", this.state);
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

    this.clearInput();
    this.moveCursorToStart();
  }

  handleKeyPress = (e) => {
    
    if (e.key === 'Enter') {
      e.preventDefault();
      this.sendMessage();
    }
  }

  moveCursorToStart = (e) => {
    this.messageInput.setSelectionRange(0, 0);
  }

  render() {
    console.log(this.state)
    return (
      <Main>
        <TitleBar>
          <BrainImage src={BrainIcon}/>
          Cerebral
        </TitleBar>
        <MessageWindow>
          {this.props.messages.map((message, index) => <Message message ={message.body} username={message.user} key={index}/>)}
          <BottomScroll ref={el => { this.bottomOfMessages = el }}></BottomScroll>
        </MessageWindow>
        <MessageInputContainer>
          <MessageInput ref={el => { this.messageInput = el }}placeholder="Type here..."onKeyPress={this.handleKeyPress} value={this.state.message} onChange={this.updateMessage}></MessageInput>
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