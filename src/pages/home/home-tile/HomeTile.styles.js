import { styled } from '@mui/styles';
import { Box } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { colors } from './../../../utils/themeUtils';

export const Wrapper = styled(Box)({
  padding: 16,
  background: colors.lightBackground,
  border: `1px solid ${colors.lightBackground}`,
  borderRadius: '4px',
  marginBottom: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
});

export const Icon = styled('img')({
  marginRight: 15,
});

export const Chevron = styled(ChevronRightIcon)(({ theme }) => ({
  color: theme.palette?.primary?.main,
  fontSize: 18,
}));

export const Title = styled();
