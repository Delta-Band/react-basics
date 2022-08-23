/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { Snackbar } from '../shared-components';
import { useSelector } from 'react-redux';
import ProfileModal from './ProfileModal';

export default function ProfleMenu() {
  const [acnchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const user = useSelector(state => state.user);

  function handleMenuClose(e) {
    setAnchorEl(null);
  }

  function closeModal() {
    setOpenModal(false);
  }

  function getInitials() {
    if (!user.name) return null;
    const nameSplit = user.name.toUpperCase().split(' ');
    return `${nameSplit[0].charAt(0)} ${nameSplit[1].charAt(0)}`;
  }

  return (
    <>
      <IconButton onClick={e => setAnchorEl(e.currentTarget)}>
        <Avatar
          alt='Remy Sharp'
          src={''}
          css={theme => ({
            background: user.name ? theme.colors.accent : 'undefined',
            letterSpacing: '-1.8px'
          })}
        >
          {getInitials()}
        </Avatar>
      </IconButton>
      <Menu
        open={Boolean(acnchorEl)}
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
      <ProfileModal openModal={openModal} closeModal={closeModal} />
      <Snackbar open={user.working}>Saving...</Snackbar>
    </>
  );
}
