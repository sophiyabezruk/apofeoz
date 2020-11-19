import React from 'react';
import { Container, Row, Col } from '@lskjs/grid';
// import Typo from '@lskjs/ui/Typo';
import Title from '../Typography/Title';
import Card from './Card';
import Pants from '../../assets/images/парабола пион .jpg';
import Pants2 from '../../assets/images/парабола пион 2.jpg';
import Pants3 from '../../assets/images/парабола шоколад.jpg';
import Pants4 from '../../assets/images/парабола шоколад 2.jpg';
import Pants5 from '../../assets/images/парабола шоколад 3.jpg';
import Pants6 from '../../assets/images/парабола шоколад 4.jpg';
import * as Styles from './Catalog.styles';

const Catalog = () => (
  <Styles.CatalogWrapper id="CATALOG">
    <Container>
      <Title>Каталог</Title>

      <Row>
        <Col lg={{ span: 4, offset: 0 }}>
          <Card
            model="Диффузия"
            cardImg={Pants}
            badge="В наличии"
            badgeVariant="light"
            color="Пион"
          />
        </Col>

        <Col lg={{ span: 4, offset: 0 }}>
          <Card
            model="Диффузия"
            cardImg={Pants5}
            badge="В наличии"
            badgeVariant="light"
            color="Чёрный"
          />
        </Col>

        <Col lg={{ span: 4, offset: 0 }}>
          <Card
            model="Диффузия"
            cardImg={Pants2}
            badge="В наличии"
            badgeVariant="light"
            color="Шоколад"
          />
        </Col>
      </Row>

      <Row>
        <Col lg={{ span: 4, offset: 0 }}>
          <Card
            model="Парабола"
            cardImg={Pants4}
            badge="Нет в наличии"
            badgeVariant="dark"
            color="Зелёный"
          />
        </Col>

        <Col lg={{ span: 4, offset: 0 }}>
          <Card
            model="Парабола"
            cardImg={Pants6}
            badge="В наличии"
            badgeVariant="light"
            color="Пудровый"
          />
        </Col>

        <Col lg={{ span: 4, offset: 0 }}>
          <Card
            model="Парабола"
            cardImg={Pants3}
            badge="Нет в наличии"
            badgeVariant="dark"
            color="Бордо"
          />
        </Col>
      </Row>
    </Container>
  </Styles.CatalogWrapper>
);

export default Catalog;

// TODO: сделеать item с названиями трусов и прокинуть 6 разных в Subtitle

// const content = [
//   {
//     id: 1,
//     image: 1,
//     heading: 'Apofeoz',
//     model: 'Парабола',
//   },
//   {
//     id: 2,
//     image: 2,
//     heading: 'Apofeoz',
//     model: 'Парабола',
//   },
//   {
//     id: 3,
//     image: Bg1,
//     heading: 'Apofeoz',
//     model: 'Парабола',
//   },
//   {
//     id: 4,
//     image: Bg1,
//     heading: 'Apofeoz',
//     model: 'Парабола',
//   },
//   {
//     id: 5,
//     image: Bg1,
//     heading: 'Apofeoz',
//     model: 'Парабола',
//   },
//   {
//     id: 6,
//     image: Bg1,
//     heading: 'Apofeoz',
//     model: 'Парабола',
//   },
// ];
