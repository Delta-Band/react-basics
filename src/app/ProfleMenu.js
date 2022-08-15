/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import getTheme from './theme';
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Typography,
  Fade,
  TextField
} from '@mui/material';

export default function ProfleMenu() {
  const [acnchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const openMenu = acnchorEl;

  function handleMenuClose(e) {
    setAnchorEl(null);
  }

  return (
    <>
      <IconButton onClick={e => setAnchorEl(e.currentTarget)}>
        <Avatar alt='Remy Sharp' src={''} />
      </IconButton>
      <Menu
        open={openMenu}
        anchorEl={acnchorEl}
        id='account-menu'
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          onClick={() => {
            setOpenModal(true);
          }}
        >
          SETTINGS
        </MenuItem>
        <MenuItem>LOG OUT</MenuItem>
      </Menu>
      <ThemeProvider theme={getTheme('light')}>
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Fade in={openModal}>
            <div
              css={theme => ({
                background: theme.pallet.bg,
                color: theme.pallet.fg,
                width: 360,
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
                  background: theme.pallet.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingInline: 24,
                  paddingBlock: 8,
                  color: theme.pallet.bg
                })}
              >
                <Typography variant='h6'>User Settings</Typography>
              </div>
              <div
                css={theme => ({
                  paddingInline: 24,
                  paddingBlock: 16
                })}
              >
                <Typography>Name</Typography>
                <TextField fullWidth />
                <Typography>Profile Pic</Typography>
              </div>
            </div>
          </Fade>
        </Modal>
      </ThemeProvider>
    </>
  );
}
