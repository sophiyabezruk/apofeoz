import styled from '@emotion/styled';

export default styled('h3')`
  color: ${(props) => props.theme.colors.darkBrown};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  font-family: ${(props) => props.theme.fontFamily};
  margin: 10px 0 10px;

  /* padding: 0 0 10px; */
`;
