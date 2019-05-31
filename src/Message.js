import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import ChatWindow from './ChatWindow';
import styled from 'styled-components';

const MainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const User = styled.div`
    margin-bottom: 5px;
    margin-top: 5px;
    color: #769FDE;
`

const MessageBody = styled.div`
    color: #CBD3DC;
`

class Message extends Component {

  testButtonClick = () => {
    console.log("yoyo")
    this.props.simpleAction();
  }

  render() {
    const userStyle = this.props.username === 'Cerebral'? {color: '#5D6979'} : null;
    return (
      <MainDiv>
          <User style = {userStyle}>{this.props.username}</User>
          <MessageBody>{this.props.message}</MessageBody>
      </MainDiv>
    );
  }
}

export default Message;