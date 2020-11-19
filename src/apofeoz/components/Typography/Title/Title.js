import styled from '@emotion/styled';

export default styled('h1')`
  color: ${(props) => props.theme.colors.darkBrown};
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 30px;
  font-family: ${(props) => props.theme.fontFamily};
  padding: 10px 0 20px;
`;
