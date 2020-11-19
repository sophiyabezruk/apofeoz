import React from 'react';
import { Container, Row, Col } from '@lskjs/grid';
// import Figure from 'react-bootstrap/Figure';
// import Typo from '@lskjs/ui/Typo';
import Title from '../Typography/Title';
import * as Styles from './About.styles';
import Text from '../Typography/Text';
import TextItalic from '../Typography/TextItalic';
import AboutImage from '../../assets/images/IMG_0658 1.png';

const About = () => (
  <Styles.Wrapper id="ABOUT">
    <Container>
      <Row>
        <Col md={12} lg={{ span: 6, offset: 0 }}>
          <Styles.ImgWrapper>
            <img alt="AboutImage" src={AboutImage} width="100%" />
          </Styles.ImgWrapper>
        </Col>
        <Col md={12} lg={{ span: 6, offset: 0 }}>
          <Styles.TextWrapper>
            <Title>О Бренде</Title>
            <Text>
              Тут будет краткое описание того, что в компании происходит,
              происходило и какая философия у этого всего. Тут будет краткое
              описание того, что в компании происходит, происходило и какая
              философия у этого всего.
            </Text>
            <TextItalic>
              Тут будет краткое описание того, что в компании происходит,
              происходило и какая философия у этого всего. Тут будет краткое
              описание того, что в компании происходит, происходило и какая
              философия у этого всего.
            </TextItalic>
          </Styles.TextWrapper>
        </Col>
      </Row>
    </Container>
  </Styles.Wrapper>
);

export default About;
