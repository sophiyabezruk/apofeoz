import React from 'react';
import { Container, Row, Col } from '@lskjs/grid';
import Button from '@lskjs/button';
import Title from '../Typography/Title';
import Subtitle from '../Typography/Subtitle';
import Text from '../Typography/Text';
import TextItalic from '../Typography/TextItalic';
import * as Styles from './Delivery.styles';

const Delivery = () => (
  <Styles.CatalogBg id="DELIVERY">
    <Container>
      <Title>Оплата</Title>
      <Row>
        <Col md={12} lg={12}>
          <Subtitle>Как сделать заказ?</Subtitle>
          <Text>
            Чтобы сделать заказ необходимо оставить заявку на сайте и произвести
            оплату. <br />В ближайшее время я с Вами свяжусь для подтверждения
            заказа.
            <Subtitle>Доставка</Subtitle>
          </Text>
          <TextItalic>
            По России: 200 руб. <br />
            Самовывоз в Санкт-Петербурге: бесплатно
          </TextItalic>
        </Col>
      </Row>
      <Row>
        <Styles.ButtonWrapper>
          <Button
            componentClass="a"
            target="_blank"
            href="https://docs.google.com/spreadsheets/d/1naP9J8XrVSE3uNmiTZT6Xie1s4NxVyfiof_27qsdQFQ/edit#gid=414029214"
            view="text"
            paint="common"
            bordered
          >
            Отследить статус заказа
          </Button>
        </Styles.ButtonWrapper>
      </Row>
    </Container>
  </Styles.CatalogBg>
);

export default Delivery;
