/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  TextField,
  Button
} from '@mui/material';
import Snackbar from './Snackbar';
import { Modal } from '../shared-components';
import styled from '@emotion/styled';
import { UserSolidCircle as UserIcon } from '@styled-icons/zondicons/UserSolidCircle';
import { useSelector, useDispatch } from 'react-redux';
import { userSlice } from './slices';

const FieldTitle = styled.div`
  margin-bottom: 8px;
`;

function Name({ name, setName }) {
  return (
    <div>
      <FieldTitle>
        <Typography>Name</Typography>
      </FieldTitle>
      <TextField
        fullWidth
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  );
}

function ProfilePic() {
  return (
    <div>
      <FieldTitle>
        <Typography>Profile Pic</Typography>
      </FieldTitle>
      <Button
        variant='contained'
        css={theme => ({
          width: '100%',
          height: 290,
          background: theme.colors.grey,
          borderRadius: 4,
          color: theme.colors.bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none'
          }
        })}
      >
        <UserIcon size={200} />
      </Button>
    </div>
  );
}

function Save({ closeModal, name }) {
  const dispatch = useDispatch();

  return (
    <Button
      variant='contained'
      fullWidth
      onClick={() => {
        closeModal();
        dispatch(userSlice.actions.setData({ name }));
      }}
    >
      Save
    </Button>
  );
}

function Cancel({ closeModal }) {
  return (
    <Button
      variant='contained'
      color='secondary'
      fullWidth
      onClick={closeModal}
    >
      Cancel
    </Button>
  );
}

export default function ProfleMenu() {
  const [acnchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const user = useSelector(state => state.user);
  const [name, setName] = useState(user.name);

  function handleMenuClose(e) {
    setAnchorEl(null);
  }

  function closeModal() {
    setOpenModal(false);
  }

  function getInitials() {
    if (!user.name) return null;
    const nameSplit = user.name.split(' ');
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
      <Modal
        width={360}
        open={openModal}
        onClose={closeModal}
        title='User Settings'
      >
        <Name name={name} setName={setName} />
        <ProfilePic />
        <Save closeModal={closeModal} name={name} />
        <Cancel closeModal={closeModal} />
      </Modal>
      <Snackbar open={user.working}>Saving...</Snackbar>
    </>
  );
}
