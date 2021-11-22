import { styled } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { colors } from './../../../utils/themeUtils';

export const Wrapper = styled(Box)({
  padding: '1rem',
  background: colors.bgGray,
  border: `1px solid ${colors.bgGray}`,
  borderRadius: '4px',
  marginBottom: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
});

export const Icon = styled('img')({
  marginRight: '1rem',
});

export const Chevron = styled(ChevronRightIcon)(({ theme }) => ({
  color: theme.palette?.primary?.main,
  fontSize: '1.125rem',
}));

export const Title = styled(Typography)({});
