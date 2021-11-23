import { styled } from '@mui/styles';
import { Container, Typography, Box, Button, Select } from '@mui/material';
import { colors } from '../../utils/themeUtils';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export const PageContainer = styled(Container)({
  padding: '0.625rem 1rem',
  '& .empty-reviews-message': {
    fontSize: '0.875rem',
  },
});

export const Wrapper = styled(Box)({
  marginTop: '1.5rem',
  marginBottom: '1rem',
});

export const Title = styled(Typography)({
  fontSize: '1.125rem',
  fontWeight: 600,
  marginTop: '1.625rem',
  marginBottom: '1rem',
});

export const ErrorWrapper = styled(Box)({
  padding: '1.875rem 0',
});

export const NoContent = styled(Typography)({
  fontSize: '0.875rem',
  color: colors.selectGray,
});

export const RatingContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& h4': {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  '& .review-count': {
    color: colors.black,
    fontSize: '0.875rem',
  },
  '& .recomm': {
    display: 'flex',
    alignItems: 'center',
    margin: '0.75rem 0 0.75rem 0',
    '& svg': {
      color: colors.green,
    },
    '& .percentage': {
      color: colors.green,
      fontSize: '2rem',
      fontWeight: 'bold',
      margin: '0 1rem 0 0.5rem',
    },
    '&.recomm-txt': {
      fontSize: '0.875rem',
    },
  },
  '& .rating-bars-container': {
    '& .rating-bar': {
      margin: '0.375rem 0',
      display: 'flex',
      alignItems: 'center',
      '& .rating-type': {
        fontSize: '0.875rem',
        fontWeight: 'bold',
      },
      '& svg': {
        color: colors.ratingColor,
        fontSize: '1rem',
      },
      '& .MuiLinearProgress-determinate': {
        width: 150,
        margin: '0 0.375rem',
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
        color: colors.brandBlue,
        fontWeight: 'bold',
      },
    },
  },
});

export const GalleryBox = styled(Box)({
  margin: '1rem 0',
});

export const ReviewTitle = styled(Typography)({
  fontSize: '0.875rem',
  fontWeight: 700,
  '&.review-count': {
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
});
export const ReviewFeature = styled(Typography)({
  fontSize: '1.125rem',
  fontWeight: 700,
  marginTop: '0.75rem',
});
export const ReviewDetails = styled(Box)({
  padding: '1.5rem 1.25rem 2.375rem 1.5rem ',
  borderStyle: 'solid',
  borderColor: colors.gray90,
  marginBottom: '1rem',
  marginTop: '0.75rem',
  borderWidth: '1px',
  '& .review-images': {
    marginBottom: '0.625rem',
    '& img': {
      width: 95,
      marginRight: '0.625rem',
    },
  },
  '& .tcs-response': {
    fontWeight: 700,
    marginTop: '1rem',
  },
});

export const UpVoteBtn = styled(Button)({
  backgroundColor: colors.brandDarkBlue,
  boxShadow: 'none',
  marginTop: '1rem',
  fontSize: '0.8rem',
  padding: '0.25rem 0.75rem',
  textTransform: 'none',
  '& svg': {
    fontSize: '1rem',
  },
  '&:hover': {
    backgroundColor: colors.brandDarkBlue,
  },
});

export const ReviewContent = styled(Typography)({
  fontSize: '0.875rem',
  fontWeight: 400,
  marginBottom: '1.75rem',
  marginTop: '1rem',
  color: colors.black,
  textAlign: 'justify',
});
export const ReviewName = styled(Typography)({
  fontSize: '1rem',
  fontWeight: '700',
  '& span': {
    color: colors.selectGray,
    fontSize: '1rem',
    fontWeight: 400,
  },
});
export const RecommendedContent = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& span': {
    textTransform: 'uppercase',
    fontSize: '0.875rem',
    fontWeight: 400,
    display: 'inline-block',
    verticalAlign: 'middle',
  },
});
export const RightIcon = styled(CheckIcon)({
  color: colors.green,
  marginRight: '0.75rem',
  top: '0.375rem',
  fontSize: '1.25rem',
});
export const CrossIcon = styled(ClearIcon)({
  color: colors.red,
  marginRight: '0.75rem',
  top: '0.375rem',
  fontSize: '1.25rem',
});
export const ReviewCount = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 700,
  marginBottom: '1rem',
});

export const SubmittedReview = styled(Typography)({
  fontSize: '0.875rem',
  marginTop: '0.25rem',
  '& .duration': {
    color: colors.selectGray,
    fontSize: '0.875rem',
    fontWeight: 400,
  },
  '& .submitted-by': {
    fontSize: '0.875rem',
    paddingLeft: '0.25rem',
    fontWeight: '700',
  },
});
export const ResponseDuration = styled(Typography)({
  color: colors.selectGray,
  fontSize: '0.875rem',
  fontWeight: 400,
});
export const ResponseContent = styled(Typography)({
  fontSize: '0.875rem',
  fontWeight: 400,
  marginBottom: '1rem',
  marginTop: '1rem',
});
export const ViewNextBtn = styled(Button)({
  boxShadow: 'none',
  fontSize: '0.875rem',
  fontWeight: '600',
  padding: '1rem 0 1rem 0',
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
  borderRadius: '0.25rem',
  marginBottom: '1rem',
  '& fieldset': {
    border: 'none',
  },
});
