import styled from '@emotion/styled';

export const SectionWrapper = styled('div')`
  background: ${(props) => props.theme.colors.background};
  padding-bottom: 180px;
  padding-top: 180px;
  position: relative;
`;

export const ImageWrapper = styled('div')`
  filter: blur(6px);
  z-index: -1;
`;
