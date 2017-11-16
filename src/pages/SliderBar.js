import React, { Component } from 'react';
import styled from 'styled-components';
import '../font/iconfont.css';

const Menu = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  height: 100vh; 
  fontSize: 12px;
  background: #1D2638;
  color: #fff;
  overflow: hidden;
`;

const Person = styled.div`
  padding: 100px 0px 0px;
  text-align: center;
`;

const Avatar = styled.img`
  max-width: 60px;
  border-radius: 60px;
`;

const Name = styled.p`

`;

const Introducation = styled.p`
  font-size: 12px;
  color: #414A5B;
`;

const ItemWrapper = styled.ul`
  width: 100%;
`;

const Icon = styled.i`
  margin-right: 10px;
`

const Item = styled.li`
  list-style: none;
  padding: 10px;
  color: #646E84;
`;

export default class SliderBar extends Component {
  render() {
    return (
      <Menu>
        <Person>
          <Avatar src={require("../images/logo.jpg")} />
          <Name>封宇</Name>
          <Introducation>心里有个发财梦</Introducation>
        </Person>
        <ItemWrapper>
          <Item><Icon className="iconfont icon-gailan"></Icon>概览</Item>
          <Item><Icon className="iconfont icon-yuanwangqiang"></Icon>愿望清单</Item>
          <Item><Icon className="iconfont icon-guihuashouru"></Icon>收支规划</Item>
          <Item><Icon className="iconfont icon-jiqiren"></Icon>智能建议</Item>
          <Item><Icon className="iconfont icon-1-biji"></Icon>读书笔记</Item>
        </ItemWrapper>
      </Menu>
    );
  }
}
