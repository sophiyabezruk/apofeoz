import React from 'react';
import Slider from 'react-slick';
import Report1 from '../../assets/images/отзывы/IMG_2087.png';
import Report2 from '../../assets/images/отзывы/IMG_2088.png';
import Report3 from '../../assets/images/отзывы/IMG_2089.png';
import Report4 from '../../assets/images/отзывы/IMG_2090.png';
import Report5 from '../../assets/images/отзывы/IMG_2091.png';
import Report6 from '../../assets/images/отзывы/IMG_2093.png';
import Report7 from '../../assets/images/отзывы/IMG_2094.png';
import Report8 from '../../assets/images/отзывы/IMG_2095.png';
import Report0 from '../../assets/images/отзывы/IMG_2096.png';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const Slick = () => (
  <Slider {...settings}>
    {/* <Styles.SlidesWrapper> */}
    <div>
      <img
        src={Report0}
        alt="карточка"
        width="100%"
        style={{ padding: '0 4px', overflow: 'hidden' }}
      />
    </div>
    <div>
      <img
        src={Report1}
        alt="карточка"
        width="100%"
        style={{ padding: '0 4px', overflow: 'hidden' }}
      />
    </div>
    <div>
      <img
        src={Report2}
        alt="карточка"
        width="100%"
        style={{ padding: '0 4px', overflow: 'hidden' }}
      />
    </div>
    <div>
      <img
        src={Report3}
        alt="карточка"
        width="100%"
        style={{ padding: '0 4px', overflow: 'hidden' }}
      />
    </div>
    <div>
      <img
        src={Report4}
        alt="карточка"
        width="100%"
        style={{ padding: '0 4px', overflow: 'hidden' }}
      />
    </div>
    <div>
      <img
        src={Report5}
        alt="карточка"
        width="100%"
        style={{ padding: '0 4px', overflow: 'hidden' }}
      />
    </div>
    <div>
      <img
        src={Report6}
        alt="карточка"
        width="100%"
        style={{ padding: '0 4px', overflow: 'hidden' }}
      />
    </div>
    <div>
      <img
        src={Report7}
        alt="карточка"
        width="100%"
        style={{ padding: '0 4px', overflow: 'hidden' }}
      />
    </div>
    <div>
      <img
        src={Report8}
        alt="карточка"
        width="100%"
        style={{ padding: '0 4px', overflow: 'hidden' }}
      />
    </div>
    {/* </Styles.SlidesWrapper> */}
  </Slider>
);

export default Slick;
