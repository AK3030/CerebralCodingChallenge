import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

const MainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-weight: 600;
`

const User = styled.div`
    margin-bottom: 5px;
    margin-top: 5px;
    color: #709DE6;
`

const MessageBody = styled.div`
    color: #CBD3DC;
    font-size: 15px;
`

class Message extends Component {

  render() {
    const userStyle = this.props.username === 'Cerebral'? {color: '#5D6979'} : null;
    return (
      <MainDiv>
          <User style = {userStyle}>{this.props.username+":"}</User>
          <MessageBody>{this.props.message}</MessageBody>
      </MainDiv>
    );
  }
}

export default Message;