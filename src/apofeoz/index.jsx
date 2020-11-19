import React from 'react';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import globalStyles from './globalStyles';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Catalog from './components/Catalog';
import Delivery from './components/Delivery';
import Social from './components/Social';
import Footer from './components/Footer';

export default () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Poiret+One|Roboto:200,200i,300,500&display=swap&subset=cyrillic"
        rel="stylesheet"
      />

      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Global styles={globalStyles} />
      <Navbar />
      <Home />
      <About />
      <Catalog />
      <Delivery />
      <Social />
      <Footer />
    </div>
  </ThemeProvider>
);
