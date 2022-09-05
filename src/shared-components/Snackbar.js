/** @jsxImportSource @emotion/react */
import { ThemeProvider } from '@emotion/react';
import getTheme from '../theme';
import { Snackbar as MuiSnackbar, Slide, Alert } from '@mui/material';

function TransitionRight(props) {
  return <Slide {...props} direction='left' />;
}

export default function Snackbar({ title, children, open, severity = 'info' }) {
  return (
    <ThemeProvider theme={getTheme('dark')}>
      <MuiSnackbar
        open={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        TransitionComponent={TransitionRight}
        title={title}
      >
        <div
          css={theme => ({
            color: theme.colors.fg,
            width: '100%'
          })}
        >
          <Alert severity={severity}>{children}</Alert>
        </div>
      </MuiSnackbar>
    </ThemeProvider>
  );
}
