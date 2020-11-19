import React from 'react';
import * as Styles from './DownloadIcon.styles';
// eslint-disable-next-line react/prop-types
export default ({ icon, title, href }) => (
  <Styles.SingleStore href={href}>
    <Styles.Icon>{icon}</Styles.Icon>
  </Styles.SingleStore>
);
