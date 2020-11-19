import styled from '@emotion/styled';

// export const IconWrapper = styled('div')`
export const Icon = styled('icon')`
  color: ${({ theme }) => theme.colors.darkBrown};
  text-align: center;
  opacity: 1;
  font-size: 28px;
  will-change: opacity;
  transition: opacity 1s ease;
`;

export const SingleStore = styled('a')`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 0 100px 15px;
  text-align: center;
  cursor: pointer;
`;
