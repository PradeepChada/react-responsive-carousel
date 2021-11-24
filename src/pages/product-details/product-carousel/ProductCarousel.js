import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Slider } from './ProductCarousel.styles';

const ProductCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSwipeEnd = (val, cal) => {
    setCurrentIndex(val);
    const x = 228 * val;
    const property = `translate3d(${-x}px, 0px, 0px)`;
    setTimeout(() => {
      document.getElementsByClassName('slider')[0].style.transform = property;
    }, 0);
  };
  return (
    <Slider
      thumbWidth={48}
      showArrows={false}
      showIndicators={false}
      onChange={handleSwipeEnd}
      onClickItem={handleSwipeEnd}
      onClickThumb={handleSwipeEnd}
      currentIndex={currentIndex}
    >
      {images.map((val) => (
        <img key={val} className='slide-image' src={val} alt={val} />
      ))}
    </Slider>
  );
};

export default ProductCarousel;
