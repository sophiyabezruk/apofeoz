import React from 'react';
import * as Styles from './AnimatedButton.styles';

export const AnimatedButton = ({ button, text, href }) => (
  <Styles.SingleButton>
    <Styles.ButtonWrapper>{button}</Styles.ButtonWrapper>
    <Styles.TextUnderButton>
      <Styles.TextItalic>{text}</Styles.TextItalic>
    </Styles.TextUnderButton>
  </Styles.SingleButton>
);

export default AnimatedButton;
