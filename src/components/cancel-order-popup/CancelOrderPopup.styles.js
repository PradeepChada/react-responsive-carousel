import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/styles';
import { colors, font, styles } from '../../utils/themeUtils';

export const DialogPopup = styled(Dialog)({
  '& .MuiPaper-elevation': {
    width: 'calc(100% - 32px)',
    margin: styles.margin[3],
    padding: styles.padding[2],
  },
  '& .MuiDialogTitle-root': {
    fontWeight: font.weight[600],
    fontSize: font.size[20],
    textAlign: 'center',
    color: colors.black,
    padding: styles.padding[2],
  },
  '& .MuiDialogActions-root': {
    justifyContent: 'space-between',
    '&>:not(:first-of-type)': {
      marginLeft: styles.margin[3],
    },
  },
  '& .MuiDialogContent-root': {
    textAlign: 'center',
    '& p': {
      color: colors.black,
      fontSize: font.size[14],
    },
  },
});
