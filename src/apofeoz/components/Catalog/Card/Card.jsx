import React from 'react';
// import { Badge } from 'react-bootstrap';
import Subtitle from '../../Typography/Subtitle';
// import CardForm from '../form/CardForm';
import TextItalic from '../../Typography/TextItalic';
import * as Styles from './Card.styles';

// eslint-disable-next-line react/prop-types
const Card = ({ badge, cardImg, model, badgeVariant, color }) => (
  <Styles.Card>
    {/* <Styles.BadgeWrapper> // TODO: badge on styles
      <Badge pill variant={badgeVariant}>
        {badge}
      </Badge>
    </Styles.BadgeWrapper> */}
    <img src={cardImg} alt="карточка" width="100%" />
    <Subtitle>Трусы {model}</Subtitle>
    <TextItalic>{color}</TextItalic>
    <Styles.CardFormWrapper>{/* <CardForm /> */}</Styles.CardFormWrapper>
  </Styles.Card>
);

export default Card;
