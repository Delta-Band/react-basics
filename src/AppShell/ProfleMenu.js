/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Snackbar } from '../shared-components';
import { useSelector } from 'react-redux';
import ProfileModal from './ProfileModal';
import { userSlice } from '../slices';

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

  function SettingsBtn({ setOpenModal }) {
    return (
      <MenuItem
        onClick={() => {
          setOpenModal(true);
        }}
      >
        SETTINGS
      </MenuItem>
    );
  }

  function LogoutBtn({ setOpenModal }) {
    const dispatch = useDispatch();

    function logoutHandler() {
      dispatch(userSlice.actions.logout());
    }

    return <MenuItem onClick={logoutHandler}>LOG OUT</MenuItem>;
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
        <SettingsBtn setOpenModal={setOpenModal} />
        <LogoutBtn setOpenModal={setOpenModal} />
      </Menu>
      <ProfileModal openModal={openModal} closeModal={closeModal} />
      <Snackbar open={Boolean(user.working)}>{user.working}...</Snackbar>
    </>
  );
}
