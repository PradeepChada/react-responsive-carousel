import { styled } from '@mui/styles';
import { Container, Typography, Box, Button, Select } from '@mui/material';
import { colors, styles, font } from '../../utils/themeUtils';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export const PageContainer = styled(Container)({
  padding: `0.625rem ${styles.padding[3]}`,
  '& .empty-reviews-message': {
    fontSize: font.size[14],
  },
});

export const Wrapper = styled(Box)({
  marginTop: styles.margin[4],
  marginBottom: styles.margin[3],
});

export const Title = styled(Typography)({
  fontSize: font.size[18],
  fontWeight: font.weight[600],
  marginTop: '1.625rem',
  marginBottom: styles.margin[3],
});

export const ErrorWrapper = styled(Box)({
  padding: '1.875rem 0',
});

export const NoContent = styled(Typography)({
  fontSize: font.size[14],
  color: colors.selectGray,
});

export const RatingContainer = styled(Box)({
  display: styles.display.flex,
  flexDirection: 'column',
  justifyContent: styles.justify.center,
  alignItems: styles.align.center,
  '& h4': {
    fontSize: font.size[32],
    fontWeight: font.weight['bold'],
  },
  '& .review-count': {
    color: colors.black,
    fontSize: font.size[14],
  },
  '& .recomm': {
    display: styles.display.flex,
    alignItems: styles.align.center,
    margin: '0.75rem 0 0.75rem 0',
    '& svg': {
      color: colors.green,
    },
    '& .percentage': {
      color: colors.green,
      fontSize: font.size[32],
      fontWeight: font.weight['bold'],
      margin: `0 ${styles.margin[3]} 0 ${styles.margin[2]}`,
    },
    '&.recomm-txt': {
      fontSize: font.size[14],
    },
  },
  '& .rating-bars-container': {
    '& .rating-bar': {
      margin: '0.375rem 0',
      display: styles.display.flex,
      alignItems: styles.align.center,
      '& .rating-type': {
        fontSize: font.size[14],
        fontWeight: font.weight['bold'],
      },
      '& svg': {
        color: colors.ratingColor,
        fontSize: font.size[16],
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
        fontWeight: font.weight['bold'],
      },
    },
  },
});

export const GalleryBox = styled(Box)({
  margin: `${styles.margin[3]} 0`,
});

export const ReviewTitle = styled(Typography)({
  fontSize: font.size[14],
  fontWeight: font.weight[700],
  '&.review-count': {
    textAlign: 'center',
    marginBottom: styles.margin[4],
  },
});
export const ReviewFeature = styled(Typography)({
  fontSize: font.size[18],
  fontWeight: font.weight[700],
  marginTop: '0.75rem',
});
export const ReviewDetails = styled(Box)({
  padding: `${styles.padding[4]} 1.25rem 2.375rem ${styles.padding[4]}`,
  borderStyle: 'solid',
  borderColor: colors.gray90,
  marginBottom: styles.margin[3],
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
    fontWeight: font.weight[700],
    marginTop: styles.margin[3],
  },
});

export const UpVoteBtn = styled(Button)({
  backgroundColor: colors.brandDarkBlue,
  boxShadow: 'none',
  marginTop: styles.margin[3],
  fontSize: font.size[14],
  padding: `${styles.padding[1]} 0.75rem`,
  textTransform: 'none',
  '& svg': {
    fontSize: font.size[16],
  },
  '&:hover': {
    backgroundColor: colors.brandDarkBlue,
  },
});

export const ReviewContent = styled(Typography)({
  fontSize: font.size[14],
  fontWeight: font.weight[400],
  marginBottom: '1.75rem',
  marginTop: styles.margin[3],
  color: colors.black,
  textAlign: 'justify',
});
export const ReviewName = styled(Typography)({
  fontSize: font.size[16],
  fontWeight: font.weight[700],
  '& span': {
    color: colors.selectGray,
    fontSize: font.size[16],
    fontWeight: font.weight[400],
  },
});
export const RecommendedContent = styled(Box)({
  display: styles.display.flex,
  alignItems: styles.align.center,
  '& span': {
    textTransform: 'uppercase',
    fontSize: font.size[14],
    fontWeight: font.weight[400],
    display: 'inline-block',
    verticalAlign: 'middle',
  },
});
export const RightIcon = styled(CheckIcon)({
  color: colors.green,
  marginRight: '0.75rem',
  top: '0.375rem',
  fontSize: font.size[20],
});
export const CrossIcon = styled(ClearIcon)({
  color: colors.red,
  marginRight: '0.75rem',
  top: '0.375rem',
  fontSize: font.size[20],
});
export const ReviewCount = styled(Typography)({
  fontSize: font.size[16],
  fontWeight: font.weight[700],
  marginBottom: styles.margin[3],
});

export const SubmittedReview = styled(Typography)({
  fontSize: font.size[14],
  marginTop: styles.margin[1],
  '& .duration': {
    color: colors.selectGray,
    fontSize: font.size[14],
    fontWeight: font.weight[400],
  },
  '& .submitted-by': {
    fontSize: font.size[14],
    paddingLeft: styles.padding[1],
    fontWeight: font.weight[700],
  },
});
export const ResponseDuration = styled(Typography)({
  color: colors.selectGray,
  fontSize: font.size[14],
  fontWeight: font.weight[400],
});
export const ResponseContent = styled(Typography)({
  fontSize: font.size[14],
  fontWeight: font.weight[400],
  marginBottom: styles.margin[3],
  marginTop: styles.margin[3],
});
export const ViewNextBtn = styled(Button)({
  boxShadow: 'none',
  fontSize: font.size[14],
  fontWeight: font.weight[600],
  padding: `${styles.padding[3]} 0 ${styles.padding[3]} 0`,
  border: '2px solid',
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
  display: styles.display.flex,
  flexGrow: '1',
  boxSizing: 'border-box',
  border: `1px solid ${colors.black}`,
  borderRadius: '0.25rem',
  marginBottom: styles.margin[3],
  '& fieldset': {
    border: 'none',
  },
});
