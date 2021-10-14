import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Slider } from './ProductCarousel.styles';

const ProductCarousel = ({ images }) => {
  return (
    <Slider showArrows={false} showIndicators={false} centerMode>
      {images.map((val) => (
        <img className='slide-image' src={val} alt={val} />
      ))}
    </Slider>
  );
};

export default ProductCarousel;
