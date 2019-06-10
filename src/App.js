import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import ChatWindow from './ChatWindow';
import styled from 'styled-components';
import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';


createGlobalStyle`
    ${styledNormalize};
`

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

  render() {
    return (
      <MainDiv>
        <ChatWindow/>  
      </MainDiv>
    );
  }
}

export default App;
