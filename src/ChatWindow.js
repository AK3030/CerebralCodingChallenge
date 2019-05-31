import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import styled from 'styled-components';
import fetchJsonp from 'fetch-jsonp';
import questionData from './questionData';
import { addMessage } from './actions/messageAction';
import { setQuestion, incrementQuestion } from  './actions/currentQuestionActions'

console.log("questionData", questionData);

const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 45%;
    background-color: purple;
    opacity: .5;
`

const TitleBar = styled.div`
    width: 100%;
    flex-grow: 2;
    background-color: blue;
    opacity: .5;
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
`

const MessageInputContainer = styled(TitleBar)`
    background-color: pink;
    flex-grow: 3;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const MessageInput = styled.textarea`
    height: 80%;
    width: 70%;
    resize: none;
`

const Message = styled.div`
    width: auto;
    height: auto;
`

const SendMessageButton = styled.div`
    background-color: blue;
    height: 60%;
    width: 15%;
`

const BottomScroll = styled.div`

`

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  testButtonClick = () => {
    console.log("yoyo")
    this.props.simpleAction();
  }

  componentDidMount() {
      // console.log('hello1');
      // fetchJsonp('https://filebin.net/6u1vikvkoxbb24nt/cerebral-coding-test-questions.json?t=x2ix165y')
      // .then(function(response) {
      //   console.log("hello")
      //   return response.json();
      // })
      // .then(function(data) {
      //   console.log(data)
      //   return data;
      // });
      this.scrollToBottom();
      this.sendQuestion();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  sendQuestion = () => {
    this.currentQuestion = questionData.find((questionObj) => questionObj.id === this.props.currentQuestion)
    this.props.addMessage({user: 'Cerebral', body: this.currentQuestion.question})
  }

  scrollToBottom = () => {
    this.bottomOfMessages.scrollIntoView();
  }

  updateMessage = (e) => {
    const message = e.target.value
    this.setState( (prevSate, props) => ({message: message}))
  }

  validateQuestion = (userAnswer, fullQuestion) => {
    //should always return the path to the next question
    if (Array.isArray(validation)) {
      return optionsValidation(userAnswer, fullQuestion)
    }
    else if (typeof fullQuestion.validation === "string") {
      return this.regexValidation(userAnswer, fullQuestion);
    }
    else {
      if (fullQuestion.validation) {
        return fullQuestion.paths
      }
      else {
        return;
      }
    }

  }

  optionsValidation = (userAnswer, fullQuestion) => {
    let validation = fullQuestion.validation;
    let paths = fullQuestion.paths;
    let id = fullQuestion.id
    let matchedAnswer = validation.find((answer) => answer === userAnswer)
    if (matchedAnswer) {
      return paths[matchedAnswer];
    }
    else {
      return id;
    }
  }

  regexValidation(userAnswer, fullQuestion) {
    let regexVal = fullQuestion.validation
    let regex = RegExp(regexVal);
    if (regex.test(userAnswer)) {
      return paths;
    }
    else {
      return fullQuestion.id
    }
  }

  clearMessage = () => {
    this.setState( (prevSate, props) => ({message: ""}))
  }

  sendMessage = () => {
    this.props.addMessage({user: 'Me', body: this.state.message});
    this.clearMessage()
  }

  render() {
    console.log("this.state", this.state)
    return (
      <Main>

          <TitleBar>Slim Shady</TitleBar>
          <MessageWindow>
              {this.props.messages.map( (message, index) => <div key={index}>{message.user + ": " + message.body}</div>)}
              <BottomScroll ref = {el => {this.bottomOfMessages = el}}></BottomScroll>
          </MessageWindow>
          <MessageInputContainer>
              <MessageInput value = {this.state.message} onChange={this.updateMessage}></MessageInput>
              <SendMessageButton onClick={this.sendMessage}></SendMessageButton>
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
  setQuestion: (id) => dispatch(setQuestion(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);