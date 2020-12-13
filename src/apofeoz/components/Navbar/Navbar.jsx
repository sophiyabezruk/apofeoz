import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar as BsNavbar } from 'react-bootstrap';
import scrollTo from '@lskjs/scroll';
import Logo from '../../assets/images/Logo.png';
import * as Styles from './Navbar.styles';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  function listenScroll() {
    const res = window.scrollY > 80;
    setIsScrolled(res);
  }

  useEffect(() => {
    listenScroll();
    window.addEventListener('scroll', listenScroll);
    return () => {
      window.removeEventListener('scroll', listenScroll);
    };
  }, []);

  return (
    <Styles.NavBar
      collapseOnSelect
      expand="sm"
      isVisible={isScrolled}
      variant="dark"
      fixed="top"
    >
      <Container>
        <Styles.NavLogoWrapper>
          <Styles.NavLogo
            onClick={() => scrollTo('#HOME')}
            href="#HOME"
            src={Logo}
            paddingTop="20"
            className="d-inline-block align-top"
            alt="Logo"
          ></Styles.NavLogo>
        </Styles.NavLogoWrapper>
        <BsNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BsNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Styles.NavLink onClick={() => scrollTo('#ABOUT')}>
              О Бренде
            </Styles.NavLink>
            <Styles.NavLink onClick={() => scrollTo('#CATALOG')}>
              Каталог
            </Styles.NavLink>
            {/* <Styles.NavLink href="#SCREENS">Размеры</Styles.NavLink> */}
            <Styles.NavLink onClick={() => scrollTo('#DELIVERY')}>
              Доставка
            </Styles.NavLink>
            <Styles.NavLink onClick={() => scrollTo('#SOCIAL')}>
              Отзывы
            </Styles.NavLink>
            <Styles.NavLink onClick={() => scrollTo('#FOOTER')}>
              Контакты
            </Styles.NavLink>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </Styles.NavBar>
  );
};

export default Navbar;
