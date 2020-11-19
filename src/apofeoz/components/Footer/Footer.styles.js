import styled from '@emotion/styled';
import Navbar from '@lskjs/navbar/Navbar';
import NavLink from '@lskjs/navbar/NavLink';
import { Col } from '@lskjs/grid';

export const Footer = styled(Navbar)`
  background-color: ${(props) => props.theme.colors.beige};
  box-shadow: 0px 0px 22px rgba(0, 0, 0, 0.04);
  height: 100px;
`;

export const NavLinks = styled(NavLink)`
  padding: 15px !important;
  will-change: color;
  transition: color 0.5s;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.colors.darkBrown} !important;
  &.active,
  &:hover {
    color: ${(props) => props.theme.colors.focusPrimary} !important;
  }
`;

export const IconCol = styled(Col)`
  display: flex;
  align-items: center;
  padding: 0 !important;
  @media (min-width: 576px) and (max-width: 767.98px) {
    max-width: inherit;
  }
`;

export const ButtonsWrapper = styled('div')`
  display: flex;
  align-items: center;
`;
