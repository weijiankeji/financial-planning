import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #e0d9c8;
`;

const Preface = styled.p`
  margin: 12px;
  display: flex;
  justify-content: center;
  color: #666;
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

export class OverView extends Component{

  render() {
    return (
      <Container>
        <Preface>所有人都希望自己变得富有一些，只是有些人的这一愿望更为强烈</Preface>
        <Author>——— <Link href="https://baike.baidu.com/item/%E5%8D%9A%E5%A4%9A%C2%B7%E8%88%8D%E8%B4%B9%E5%B0%94/9869587?fr=aladdin" target="_blank">Bodo Schaefer</Link></Author>
      </Container>
    );
  }

}
