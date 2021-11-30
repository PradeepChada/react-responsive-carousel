import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseRounded from '@mui/icons-material/CloseRounded';
import { Modal, Slider, Video } from './ProductVideos.styles';
import ReactPlayer from 'react-player';
import 'video-react/dist/video-react.css';

window._wq = window._wq || [];

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
  return (
    <Modal fullWidth open={showModal} onClose={handleClose}>
      <IconButton className='close-btn' color='error' onClick={handleClose}>
        <CloseRounded />
      </IconButton>
      <DialogContent sx={{ padding: 0 }}>
        <Slider
          hasMount={false}
          showArrows={false}
          swipeable
          autoPlay={false}
          onChange={onChangeSlide}
          showThumbs={false}
        >
          {data?.map((item, i) => {
            return (
              <div>
                <ReactPlayer
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
