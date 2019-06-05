import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import fetchJsonp from 'fetch-jsonp';
import { setQuestion } from './redux/question';
import Message from './Message';
import BrainIcon from './brainicon.png';
import MessageInputBar from './MessageInputBar'

const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 45%;
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.25);
    min-width: 300px;
`

export const TitleBar = styled.div`
    width: 100%;
    flex-grow: 1;
    background-color: #ECF5F6;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 20px;
    font-weight: 600;
    color: #5D6979;
`

const MessageWindow = styled.div`
    height: 55%;
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-right: 20px;
    padding-left: 20px;
    background-color: white;
    padding-bottom: 4px;
`

const BottomScroll = styled.div`

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

  render() {
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
        <MessageInputBar/>
      </Main>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages,
})

const mapDispatchToProps = dispatch => ({
  setQuestion: (id) => dispatch(setQuestion(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);