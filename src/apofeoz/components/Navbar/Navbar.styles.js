import styled from '@emotion/styled';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const NavBar = styled(Navbar)`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 22px rgba(0, 0, 0, 0.04);
  height: 50px;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  transform: ${({ isVisible }) =>
    isVisible ? 'translate(0, 0)' : 'translate(0, -50px)'};
  will-change: opacity, transform;
  transition: opacity 1s, transform 1s;
`;

export const NavLogoWrapper = styled(Navbar.Brand)`
  height: 50px;
`;

export const NavLink = styled(Nav.Link)`
  padding: 15px !important;
  will-change: color;
  transition: color 1s;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.colors.darkBrown} !important;
  &.active,
  &:hover {
    color: ${(props) => props.theme.colors.coral} !important;
  }
`;

export const NavLogo = styled('img')``;
