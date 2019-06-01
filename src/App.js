import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import ChatWindow from './ChatWindow';
import styled from 'styled-components';

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #C5EEF0;
`

class App extends Component {

  testButtonClick = () => {
    this.props.simpleAction();
  }

  render() {
    return (
      <MainDiv>
        <ChatWindow></ChatWindow>

        
      </MainDiv>
    );
  }
}

export default App;
