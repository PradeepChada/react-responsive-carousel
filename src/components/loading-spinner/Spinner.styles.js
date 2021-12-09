import { Container } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { colors, styles } from './../../utils/themeUtils';

export const Wrapper = styled(Container)({
  position: 'fixed',
  display: "grid",
  placeItems:"center",
  height: '100%',
  background: colors.white,
  opacity: '0.75',
  zIndex: '20',
});

export const SpinnerParent = styled('div')({
  width: '197px',
  height: '197px',
  display: styles.display.inlineBlock,
  overflow: 'hidden',
  background: 'none',
});

const spin = keyframes`
0%: {
  opacity: 1;
},
100% {
  opacity: 0;
}
`;

export const SpinnerChild = styled('div')({
  width: '100%',
  height: '100%',
  position: 'relative',
  transform: 'translateZ(0) scale(1)',
  backfaceVisibility: 'hidden',
  transformOrigin: '0 0',
  '& div': {
    left: '94.56px',
    top: '61.07px',
    position: 'absolute',
    background: colors.spinnerBackground,
    width: '7.88px',
    height: '19.7px',
    border: '2.1670000000000003px / 2.1670000000000003px',
    borderRadius: '20px',
    transformOrigin: '3.94px 37.43px',
    boxSizing: 'content-box',
    animation: `${spin} linear 1.2048192771084336s infinite`,
  },
  '& div:nth-of-type(1)': {
    transform: 'rotate(0deg)',
    animationDelay: '-1.0542168674698795s',
    background: colors.spinnerBackground,
  },
  '& div:nth-of-type(2)': {
    transform: 'rotate(45deg)',
    animationDelay: '-0.9036144578313252s',
    background: colors.spinnerBackground,
  },
  '& div:nth-of-type(3)': {
    transform: 'rotate(90deg)',
    animationDelay: '-0.753012048192771s',
    background: colors.spinnerBackground,
  },
  '& div:nth-of-type(4)': {
    transform: 'rotate(135deg)',
    animationDelay: '-0.6024096385542168s',
    background: colors.spinnerBackground,
  },
  '& div:nth-of-type(5)': {
    transform: 'rotate(180deg)',
    animationDelay: '-0.4518072289156626s',
    background: colors.spinnerBackground,
  },
  '& div:nth-of-type(6)': {
    transform: 'rotate(225deg)',
    animationDelay: '-0.3012048192771084s',
    background: colors.spinnerBackground,
  },
  '& div:nth-of-type(7)': {
    transform: 'rotate(270deg)',
    animationDelay: '-0.1506024096385542s',
    background: colors.spinnerBackground,
  },
  '& div:nth-of-type(8)': {
    transform: 'rotate(315deg)',
    animationDelay: '0s',
    background: colors.spinnerBackground,
  },
});
