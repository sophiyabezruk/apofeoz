import React from 'react';
import { Container, Row, Col } from '@lskjs/grid';
import Slick from '../Slick';
import * as Styles from './Social.styles';
import Title from '../Typography/Title';
import BgImg from '../../assets/images/bgImg.png';

const Social = () => (
  <Styles.SectionWrapper id="SOCIAL">
    <Container>
      <Title>Отзывы</Title>
      <Row>
        <Col md={12} lg={8}>
          <Slick />
        </Col>
        <Col md={12} lg={{ span: 3, offset: 1 }}>
          <Styles.ImageWrapper>
            <img src={BgImg} alt="карточка 1" height={732} />
          </Styles.ImageWrapper>
        </Col>
      </Row>
    </Container>
  </Styles.SectionWrapper>
);

export default Social;
