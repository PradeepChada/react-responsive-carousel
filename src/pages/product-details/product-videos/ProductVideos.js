import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from './../../../assets/icons/close.svg';
import { Modal, Slider, Player } from './ProductVideos.styles';

const ProductVideos = ({ data, showModal, handleClose }) => {
  const [currentIndex, setCurrentIndex] = React.useState();
  const [playing, setPlaying] = React.useState(false);
  const onStartVideo = (i) => {
    setCurrentIndex(i);
    setPlaying(true);
  };
  const onChangeSlide = (i) => {
    setPlaying(false);
    setCurrentIndex();
  };

  const onCloseModal = () => {
    setCurrentIndex();
    setPlaying(false);
    handleClose();
  };
  return (
    <Modal fullWidth open={showModal} onClose={onCloseModal}>
      <IconButton className='close-btn' color='error' onClick={onCloseModal}>
        <img src={CloseIcon} alt='close-icon' />
      </IconButton>
      <DialogContent sx={{ padding: 0 }}>
        <Slider
          hasMount={false}
          // showArrows={false}
          autoPlay={false}
          onChange={onChangeSlide}
          showThumbs={false}
          showIndicators={data?.length > 1}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <IconButton
                color='primary'
                onClick={onClickHandler}
                label={label}
                className='arrow-btn'
                style={{ left: 0 }}
              >
                <ChevronLeftIcon />
              </IconButton>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <IconButton
                color='primary'
                onClick={onClickHandler}
                title={label}
                className='arrow-btn'
                style={{ right: 0 }}
              >
                <ChevronRightIcon />
              </IconButton>
            )
          }
        >
          {data?.map((item, i) => {
            return (
              <div>
                <Player
                  width='100%'
                  url={item.url}
                  poster={item.thumbnail}
                  playing={playing && currentIndex === i}
                  onStart={() => onStartVideo(i)}
                  height='13rem'
                />
              </div>
            );
          })}
        </Slider>
      </DialogContent>
    </Modal>
  );
};

export default ProductVideos;
