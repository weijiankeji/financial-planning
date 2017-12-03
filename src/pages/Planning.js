import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
`;

export class Planning extends Component{

  render() {
    return (
      <Container>Planning</Container>
    );
  }

}

const savedMoney = 10000;

export class SavedMoney extends Component {

  constructor(props) {
    super(props);

    this.state = {
      money: 0
    };
  }

  componentDidMount() {
    this.inter = setInterval(() => {
      if ( this.state.money + 10 > savedMoney) {
        clearInterval(this.inter);
        this.setState({
          money: savedMoney
        });
      } else {
        this.setState({
          money: this.state.money + 10
        });
      }

    }, 1);
  }

  render() {
    return (
      <div style={{
        fontSize: '40px'
      }}>
        {`¥${this.state.money}`}
      </div>
    )
  }

}
