import React, { Component } from 'react';
import styled from 'styled-components';
import { sliceArray } from '../utils/Array';
import { BriefDreamList } from './DreamList';
import { SavedMoney } from './Planning';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #e0d9c8;
`;

const Header = styled.div`
  margin-bottom: 35px;
`;

const Preface = styled.p`
  margin: 30px 12px 12px 0;
  padding-left: 6%;
  display: flex;
  color: #666;
  font-weight: bold;
`;

const Author = styled.p`
  margin: 0px;
  display:flex;
  justify-content: flex-end;
  padding-right: 12px;
  color: #999;
`;

const Link = styled.a`
  color: #999;
  text-decoration: none;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Item = styled.div`
  flex: 1;
  padding-left: 6%;
  height: 300px;
`;

const Title = styled.p`
  text-align: left;
  color: #6a544a;
`;

const Icon = styled.i`
  margin-right: 10px;
`;

const overviewData = sliceArray([
  {
    className: 'yuanwangqiang',
    title: '最近1个月的愿望',
    component: <BriefDreamList />
  },
  {
    className: 'guihuashouru',
    title: '已积累愿望基金',
    component: <SavedMoney />
  },
  {
    className: 'jiqiren',
    title: '机器人助手的建议'
  },
  {
    className: '1-biji',
    title: '书中自有黄金屋'
  }
], 2);

export class OverView extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Preface>所有人都希望自己变得富有一些，只是有些人的这一愿望更为强烈</Preface>
          <Author>——— <Link href="https://baike.baidu.com/item/%E5%8D%9A%E5%A4%9A%C2%B7%E8%88%8D%E8%B4%B9%E5%B0%94/9869587?fr=aladdin" target="_blank">Bodo Schaefer</Link></Author>
        </Header>
        {
          overviewData.map((row, i) => {
            const item = row.map((item, j) => {
              return (
                <Item key={`overview_row_${i}_item_${j}`}>
                  <Title>
                    <Icon className={`iconfont icon-${item.className}`}></Icon>
                    {item.title}
                  </Title>
                  {item.component}
                </Item>
              );
            });

            return <Row key={`overview_row_${i}`}>{item}</Row>
          })
        }
      </Container>
    );
  }

}
