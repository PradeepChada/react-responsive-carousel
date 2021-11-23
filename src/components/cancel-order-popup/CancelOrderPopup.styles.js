import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/styles';
import { colors, font } from '../../utils/themeUtils';

export const DialogPopup = styled(Dialog)({
  '& .MuiPaper-elevation': {
    width: 'calc(100% - 32px)',
    margin: 16,
    padding: 8,
  },
  '& .MuiDialogTitle-root': {
    fontWeight: font.weight[600],
    fontSize: font.size[20],
    textAlign: 'center',
    color: colors.black,
    padding: 8,
  },
  '& .MuiDialogActions-root': {
    justifyContent: 'space-between',
    '&>:not(:first-of-type)': {
      marginLeft: 16,
    },
  },
  '& .MuiDialogContent-root': {
    fontSize: font.size[14],
    textAlign: 'center',
    '& p': {
      color: colors.black,
    },
  },
});
