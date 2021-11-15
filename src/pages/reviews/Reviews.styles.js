import { styled } from '@mui/styles';
import { Container, Typography, Box, Button, Select } from '@mui/material';
import { colors } from '../../utils/themeUtils';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export const PageContainer = styled(Container)({
  padding: '9px 15px',
  '& .empty-reviews-message': {
    fontSize: 14,
  },
});

export const Wrapper = styled(Box)({
  marginTop: 24,
  marginBottom: 16,
});

export const Title = styled(Typography)({
  fontSize: 18,
  lineHeight: '22px',
  fontWeight: 600,
  marginTop: 25,
  marginBottom: 16,
});

export const ErrorWrapper = styled(Box)({
  padding: '29px 0px',
});

export const NoContent = styled(Typography)({
  fontSize: 14,
  lineHeight: '21px',
  color: colors.abbey,
});

export const RatingContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& h4': {
    fontSize: 32,
    lineHeight: 1.5,
    fontWeight: 'bold',
  },
  '& .review-count': {
    color: colors.black,
    fontSize: 14,
    lineHeight: '18px',
  },
  '& .recomm': {
    display: 'flex',
    alignItems: 'center',
    margin: '12px 0 11px 0',
    '& svg': {
      color: colors.green,
    },
    '& .percentage': {
      color: colors.green,
      fontSize: 32,
      lineHeight: 1.5,
      fontWeight: 'bold',
      margin: '0 16px 0 8px',
    },
    '&.recomm-txt': {
      fontSize: 14,
      lineHeight: '18px',
    },
  },
  '& .rating-bars-container': {
    '& .rating-bar': {
      margin: '5px 0',
      display: 'flex',
      alignItems: 'center',
      '& .rating-type': {
        fontSize: 14,
        lineHeight: '18px',
        fontWeight: 'bold',
      },
      '& svg': {
        color: colors.ratingColor,
        fontSize: 16,
      },
      '& .MuiLinearProgress-determinate': {
        width: 150,
        margin: '0 5px',
        borderRadius: '2px',
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: colors.black,
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: colors.ratingColor,
        },
      },
      '& .user-count': {
        color: colors.primary,
        lineHeight: '22px',
        fontWeight: 'bold',
      },
    },
  },
});

export const GalleryBox = styled(Box)({
  margin: '15px 0',
});

export const ReviewTitle = styled(Typography)({
  fontSize: 14,
  lineHeight: '21px',
  fontWeight: 700,
  '&.review-count': {
    textAlign: 'center',
    marginBottom: 24,
  },
});
export const ReviewFeature = styled(Typography)({
  fontSize: 18,
  lineHeight: '27px',
  fontWeight: 700,
  marginTop: '12px',
});
export const ReviewDetails = styled(Box)({
  padding: '24px 20.09px 38px 23.96px ',
  borderStyle: 'solid',
  borderColor: colors.gray90,
  marginBottom: '16px',
  marginTop: '12px',
  borderWidth: '1px',
  '& .review-images': {
    marginBottom: 10,
    '& img': {
      width: 95,
      marginRight: 10,
    },
  },
});
export const ReviewContent = styled(Typography)({
  fontSize: '14px',
  fontWeight: 400,
  marginBottom: '28px',
  lineHeight: '21px',
  marginTop: '16px',
  color: colors.black,
  textAlign: 'justify',
});
export const ReviewName = styled(Typography)({
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '24px',
  '& span': {
    color: colors.abbey,
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 400,
  },
});
export const RecommendedContent = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& span': {
    textTransform: 'uppercase',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '17px',
    display: 'inline-block',
    verticalAlign: 'middle',
  },
});
export const RightIcon = styled(CheckIcon)({
  color: colors.green,
  marginRight: '11.35px',
  top: '6px',
  fontSize: '20px',
});
export const CrossIcon = styled(ClearIcon)({
  color: colors.red,
  marginRight: '11.35px',
  top: '6px',
  fontSize: '20px',
});
export const ReviewCount = styled(Typography)({
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
  marginBottom: '16px',
});

export const SubmittedReview = styled(Typography)({
  fontSize: '14px',
  marginTop: '4px',
  lineHeight: '21px',
  '& .duration': {
    color: colors.abbey,
    fontSize: 14,
    lineHeight: '21px',
    fontWeight: 400,
  },
  '& .submitted-by': {
    fontSize: '14px',
    paddingLeft: '4px',
    fontWeight: '700',
    lineHeight: '21px',
  },
});
export const ResponseDuration = styled(Typography)({
  color: colors.abbey,
  fontSize: 14,
  lineHeight: '21px',
  fontWeight: 400,
});
export const ResponseContent = styled(Typography)({
  fontSize: '14px',
  fontWeight: 400,
  marginBottom: '16px',
  lineHeight: '21px',
  marginTop: '16px',
});
export const ViewNextBtn = styled(Button)({
  boxShadow: 'none',
  fontSize: 14,
  fontWeight: '600',
  padding: '15px 0 16px 0',
  border: '2px solid',
  lineHeight: 1.5,
  borderColor: colors.lightBlue,
  color: colors.lightBlue,
  '&:hover': {
    boxShadow: 'none',
    borderColor: colors.lightBlue,
    color: colors.lightBlue,
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: colors.lightBlue,
    borderColor: colors.lightBlue,
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

export const Dropdown = styled(Select)({
  height: '42px',
  display: 'flex',
  flexGrow: '1',
  boxSizing: 'border-box',
  border: `1px solid ${colors.black}`,
  borderRadius: '4px',
  marginBottom: '16px',
  '& fieldset': {
    border: 'none',
  },
});
