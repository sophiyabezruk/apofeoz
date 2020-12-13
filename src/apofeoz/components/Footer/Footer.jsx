import React from 'react';
import { Container, Row, Col } from '@lskjs/grid';
import Nav from '@lskjs/navbar/Nav';
import Button from '@lskjs/button';
import scrollTo from '@lskjs/scroll';
import InstaIcon from '../../assets/svg/Insta';
import TwitterIcon from '../../assets/svg/Twitter';
import Like from '../../assets/svg/like';
import theme from '../../theme';
import * as Styles from './Footer.styles';
import AnimatedButton from './AnimatedButton';

const links = [
  {
    id: 1,
    title: 'twitter',
    href: 'https://twitter.com/pofeoz',
    icon: <TwitterIcon size={25} color={theme.colors.darkBrown} />,
  },
  {
    id: 2,
    title: 'Instagram',
    href: 'https://www.instagram.com/apofeoz_uw/?hl=ru',
    icon: <InstaIcon size={25} color={theme.colors.darkBrown} />,
  },
  {
    id: 3,
    title: 'soBez',
    href: 'https://www.instagram.com/apofeoz_uw/?hl=ru',
    icon: <Like size={25} color={theme.colors.darkBrown} />,
  },
];

// TODO: переделать копирайт
const Footer = () => (
  <Styles.Footer variant="light">
    <Container id="FOOTER">
      <Row>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
        <Col lg={6} md={6} sm={12}>
          <Nav className="mr-auto">
            <Styles.NavLinks onClick={() => scrollTo('#ABOUT')}>
              О&nbsp;Бренде
            </Styles.NavLinks>
            <Styles.NavLinks onClick={() => scrollTo('#CATALOG')}>
              Каталог
            </Styles.NavLinks>
            {/* <Styles.NavLink href="#SCREENS">Размеры</Styles.NavLink> */}
            <Styles.NavLinks onClick={() => scrollTo('#DELIVERY')}>
              Доставка
            </Styles.NavLinks>
            <Styles.NavLinks onClick={() => scrollTo('#SOCIAL')}>
              Отзывы
            </Styles.NavLinks>
          </Nav>
        </Col>
        {/* </Navbar.Collapse> */}
        <Col lg={6} md={6} sm={6}>
          <Styles.ButtonsWrapper>
            {links.map((item) => (
              <Styles.IconCol lg={2} md={2} sm={2} xs={2} key={item.id}>
                <AnimatedButton
                  text={item.title}
                  button={
                    <Button
                      componentClass="a"
                      href={item.href}
                      target="_blank"
                      view="empty"
                      paint="primary"
                    >
                      {item.icon}
                    </Button>
                  }
                />
              </Styles.IconCol>
            ))}
          </Styles.ButtonsWrapper>
        </Col>
      </Row>
    </Container>
  </Styles.Footer>
);

export default Footer;
