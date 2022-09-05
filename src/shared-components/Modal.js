/** @jsxImportSource @emotion/react */
import { Fragment } from 'react';
import { ThemeProvider } from '@emotion/react';
import getTheme from '../theme';
import { Modal as MuiModal, Typography, Fade } from '@mui/material';

export default function Modal({
  children,
  width = 450,
  open = false,
  onClose,
  title = ''
}) {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <MuiModal
        open={open}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Fade in={open}>
          <div
            css={theme => ({
              background: theme.colors.bg,
              color: theme.colors.fg,
              width,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              borderRadius: 8,
              overflow: 'hidden'
            })}
          >
            <div
              css={theme => ({
                background: theme.colors.accent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingInline: 24,
                paddingBlock: 8,
                color: theme.colors.bg
              })}
            >
              <Typography variant='h6'>{title}</Typography>
            </div>
            <div
              css={theme => ({
                paddingInline: 24,
                paddingBlock: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 20
              })}
            >
              {children.map((child, i) => (
                <Fragment key={`modal-child-${i}`}>{child}</Fragment>
              ))}
            </div>
          </div>
        </Fade>
      </MuiModal>
    </ThemeProvider>
  );
}
