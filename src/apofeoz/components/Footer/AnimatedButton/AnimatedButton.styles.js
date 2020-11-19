import styled from '@emotion/styled';

export const ButtonWrapper = styled('div')`
  color: ${({ theme }) => theme.colors.coral};
  text-align: center;
  opacity: 1;
  font-size: 40px;
  position: absolute;
  right: 40px;
  will-change: opacity;
  transition: opacity 1s ease;
`;

export const TextItalic = styled('p')`
  font-style: normal;
  font-weight: 200;
  font-size: 12px;
  line-height: 100%;
  opacity: 0;
  letter-spacing: 0.06em;
`;

export const TextUnderButton = styled('div')`
  position: absolute;
  width: 100%;
  right: 20px;
  top: 15px;
  left: -45px;
  bottom: auto;
  opacity: 0;
  align-items: center;
  will-change: opacity;
  transition: opacity 1s ease;
`;

export const SingleButton = styled('div')`
  &:first-of-type {
    display: flex;
    width: 100%;
    text-align: center;
    cursor: pointer;
    &:hover {
      background: transparent;
      ${TextUnderButton} {
        opacity: 1;
      }
      ${ButtonWrapper} {
        opacity: 0;
      }
      ${TextItalic} {
        opacity: 1;
      }
    }
  }
`;
