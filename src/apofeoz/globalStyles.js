import { css } from '@emotion/core';

export default css`
  body {
    font-family: 'Raleway', sans-serif !important;
  }

  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) and (max-width: 767.98px) {
    .container {
      max-width: 100% !important;
    }
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) and (max-width: 991.98px) {
    .container {
      max-width: 750px !important;
    }
  }
  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .container {
      max-width: 970px !important;
    }
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    .container {
      max-width: 1170px !important;
    }
  }

  .ant-form-item-label label {
    width: 100%;
  }
`;
