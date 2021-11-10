import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseRounded from '@mui/icons-material/CloseRounded';
import { Modal, PhotoContent, Slider } from './PhotoCarousel.styles';
import { Rating, Typography } from '@mui/material';
import moment from 'moment';

const PhotoCarousel = ({ data, showModal, handleClose, photoIndex = 0 }) => {
  return (
    <Modal open={showModal} onClose={handleClose} >
      <IconButton className='close-btn' color='error' onClick={handleClose}>
        <CloseRounded />
      </IconButton>
      <DialogContent sx={{ padding: 0 }}>
        <Slider
          selectedItem={photoIndex}
          showIndicators={false}
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <IconButton
                color='primary'
                onClick={onClickHandler}
                label={label}
                className='arrow-btn'
                style={{ left: 15 }}
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
                style={{ right: 15 }}
              >
                <ChevronRightIcon />
              </IconButton>
            )
          }
        >
          {data?.map((item) => (
            <div>
              <img className='slide-image' src={item?.uri} alt={item?.uri} />
              <PhotoContent>
                <Rating
                  className='rating-bar'
                  name='read-only'
                  value={4}
                  size={'small'}
                  readOnly
                />
                <Typography className='title'>{item?.headline}</Typography>
                <Typography>{item?.caption}</Typography>
                <Typography className='time-ago'>
                  {moment(item?.created_date).fromNow()}
                </Typography>
              </PhotoContent>
            </div>
          ))}
        </Slider>
      </DialogContent>
    </Modal>
  );
};

export default PhotoCarousel;
