import styled from '@emotion/styled';

export const Wrapper = styled('div')`
  background: ${(props) => props.theme.colors.background};
  padding-bottom: 90px;
  padding-top: 180px;
`;

export const ImgWrapper = styled('div')`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 5px;
  > img {
    object-fit: cover;
  }
`;

export const TextWrapper = styled('div')`
  text-align: left;
  font-family: ${(props) => props.theme.fontFamily};
  @media (max-width: 768px) {
    text-align: left;
  }
`;
