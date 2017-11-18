import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import styled from 'styled-components';
import {
  SideBar,
  OverView,
  DreamList,
  Planning,
  SmartIdea,
  Notes
} from './pages/index';

const AppContainer = styled.div``;

const RouterContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Router>
          <RouterContainer>
            <SideBar />
            <Route path="/" exact component={OverView} />
            <Route path="/dreamlist" exact component={DreamList} />
            <Route path="/planning" exact component={Planning} />
            <Route path="/smartidea" exact component={SmartIdea} />
            <Route path="/notes" exact component={Notes} />
          </RouterContainer>
        </Router>
      </AppContainer>
    );
  }
}

export default App;
