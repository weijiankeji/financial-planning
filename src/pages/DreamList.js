import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
`;

export class DreamList extends Component{

  render() {
    return (
      <Container>DreamList</Container>
    );
  }

}

const BriefList = styled.ul`
  list-style: none;
	margin:0;
	padding:1rem 3rem 1rem;
	max-width:500px;
	background:#7DB6F8;
	color:#FFF;
	box-shadow:-8px -8px 0px 0px rgba(180,180,180,.1);
`;

const BriefDream = styled.li`
	display:flex;
	margin:0 -3rem 4px;
	padding:1.1rem 3rem;
	justify-content:space-between;
	align-items:center;
	background:rgba(255,255,255,0.1);
`

export class BriefDreamList extends Component {

  render() {
    return (
      <BriefList>
        <BriefDream>减肥10斤</BriefDream>
        <BriefDream>去小吊梨汤吃顿饭</BriefDream>
        <BriefDream>买1件衣服</BriefDream>
      </BriefList>
    );
  }

}
