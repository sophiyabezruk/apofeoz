import React from 'react';
import { Container, Row, Col } from '@lskjs/grid';
import Button from '@lskjs/button';
import scrollTo from '@lskjs/scroll';
import theme from '../../theme';
import Insta from '../../assets/svg/Insta';
// import Inner from '../../assets/images/Inner.png';
import * as Styles from './Home.styles';

const Home = ({ ...props }) => (
  <Styles.Parallax id="HOME" {...props}>
    <Styles.Overlay>
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <Styles.TextWrapper>
              <Styles.Title>Apofeoz</Styles.Title>
              <Styles.ButtonInstWrapper>
                {/* <Styles.InnerWrapper>
                  <img src={Inner} alt="inner" width="50%" />
                </Styles.InnerWrapper> */}
                <Button
                  componentClass="a"
                  target="_blank"
                  href="https://www.instagram.com/apofeoz_uw/"
                  view="empty"
                  paint="common"
                >
                  <Insta size={40} color={theme.colors.beige} />
                </Button>
              </Styles.ButtonInstWrapper>
            </Styles.TextWrapper>
          </Col>
        </Row>
      </Container>
      <Styles.ButtonWrapper>
        <Button
          componentClass="a"
          onClick={() => scrollTo('#CATALOG')}
          href="#"
          // view="text"
          // paint="primary"
          bordered
          borderColor="rgba(255, 255, 255, 0.3)"
          block
          colors={{
            color: 'white',
            background: 'transparent',
            hoverColor: 'white',
            hoverBackground: 'rgba(255, 255, 255, 0.5)',
            activeColor: 'white',
            activeBackground: 'rgba(255, 255, 255, 0.6)',
          }}
          size="large"
        >
          Каталог товаров
        </Button>
      </Styles.ButtonWrapper>
    </Styles.Overlay>
  </Styles.Parallax>
);
export default Home;
