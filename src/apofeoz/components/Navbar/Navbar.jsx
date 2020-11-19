import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar as BsNavbar } from 'react-bootstrap';
import scrollTo from '@lskjs/scroll';
import Logo from '../../assets/images/Logo.png';
import * as Styles from './Navbar.styles';

const Navbar = () => {
  const [visibleNavbar, setVisibleNavbar] = useState(false);
  // TODO: пофиксить пропадание навбара (30 мин)
  function onListen() {
    if (window.scrollY >= 80 && !visibleNavbar) {
      setVisibleNavbar(true);
    } else {
      setVisibleNavbar(false);
    }
  }

  useEffect(() => {
    // componentDidMount аналог на хуках
    window.addEventListener('scroll', onListen);

    // componentWillUnmount
    return () => {
      window.removeEventListener('scroll', onListen);
    };
  }, [onListen]);
  // if (!visibleNavbar) return false;
  return (
    <Styles.NavBar
      collapseOnSelect
      expand="sm"
      isVisible={visibleNavbar}
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
