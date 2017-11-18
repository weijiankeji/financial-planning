import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import styled from 'styled-components';
import '../font/iconfont.css';

const Menu = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 300px;
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
  margin: 0px;
  padding: 0px;
`;

const Icon = styled.i`
  margin-right: 10px;
`

const Item = styled.li`
  list-style: none;
  padding: 10px;
  background-color: ${props => props.selected ? '#303c57' : '#1D2638'};
`;

const RouteLink = styled(Link)`
  color: #646E84;
  text-decoration: none;
`;

const ItemData = [
  {
    className: 'gailan',
    route: '/',
    name: '概览'
  },
  {
    className: 'yuanwangqiang',
    route: '/dreamList',
    name: '愿望清单'
  },
  {
    className: 'guihuashouru',
    route: '/planning',
    name: '收支规划'
  },
  {
    className: 'jiqiren',
    route: '/smartidea',
    name: '智能建议'
  },
  {
    className: '1-biji',
    route: '/notes',
    name: '读书笔记'
  }
]

class SideBarWithoutRoute extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: ["", "dreamlist", "planning", "smartidea", "notes"].findIndex((p) => {return props.location.pathname === `/${p}`})
    };
  }

  render() {
    return (
      <Menu>
        <Person>
          <Avatar src={require("../images/logo.jpg")} />
          <Name>封宇</Name>
          <Introducation>心里有个发财梦</Introducation>
        </Person>
        <ItemWrapper>
          {
            ItemData.map((item, i) => {
              return (
                <RouteLink to={item.route}>
                  <Item key={`MenuItem_${i}`} selected={i === this.state.selectedItem} onClick={() => {this.setState({selectedItem: i})}}> 
                      <Icon className={`iconfont icon-${item.className}`} />
                      {item.name}
                  </Item>
                </RouteLink>
              );
            })
          }
        </ItemWrapper>
      </Menu>
    );
  }
}

export const SideBar = withRouter(SideBarWithoutRoute);


