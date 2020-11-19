import styled from '@emotion/styled';

export const Parallax = styled('section')`
  background-attachment: fixed !important;
  background-position: 50% 0px;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: relative;
`;

export const Overlay = styled('div')`
  background-color: ${(props) => props.theme.colors.coral};
  /* opacity: 0.5; */
  min-height: 100vh;
  display: flex;
  align-items: center;
`;
export const InnerWrapper = styled('div')``;

export const TextWrapper = styled('div')`
  text-align: center;
  font-family: ${(props) => props.theme.fontFamily2};
  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 550px) {
    text-align: center;
  }
`;

export const Title = styled('h1')`
  color: ${(props) => props.theme.colors.beige};
  text-transform: uppercase;
  font-size: 144px;
  font-weight: 300;
  line-height: 45px;
  font-family: ${(props) => props.theme.fontFamily2};
  @media (max-width: 768px) {
    text-align: center;
    font-size: 100px;
  }
  @media (max-width: 550px) {
    text-align: center;
    font-size: 80px;
  }
`;

export const ButtonInstWrapper = styled('div')`
  max-width: 480px;
  margin: 90px auto 50px;
`;

export const ButtonWrapper = styled('div')`
  max-width: 450px;
  width: 100%;
  margin: 90px auto 50px;
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  @media (max-width: 550px) {
    max-width: 350px;
  }
`;
