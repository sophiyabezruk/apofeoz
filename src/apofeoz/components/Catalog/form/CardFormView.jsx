import React from 'react';
import { Row, Col } from '@lskjs/grid';
// import Form from '@lskjs/form';
import Button from '@lskjs/button';
import * as Styles from './CardFormView.styles';

const CardFormView = ({ control, status, errors, handleSubmit }) => (
  // <Form onSubmit={handleSubmit}>
  <Row gap={1}>
    <Col md={4} xs={4}>
      {/* <FastField {...control('select')} /> */}
    </Col>

    <Col xs={4}>{/* <FastField {...control('input')} /> */}</Col>

    <Col xs={4}>
      <Styles.ButtonWrapper>
        <Button
          componentClass="a"
          target="_blank"
          size="large"
          paint="primary"
          href="https://docs.google.com/forms/d/19YKa79qXh3BZ6CFNgs5ynvBmyPRLGiNzMnJB7mm0vyU/viewform?edit_requested=true"
        >
          Заказать
        </Button>
      </Styles.ButtonWrapper>
    </Col>
  </Row>
  // {/* </Form> */}
);

export default CardFormView;
