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
import { Modal } from '../shared-components';
import styled from '@emotion/styled';
import { UserSolidCircle as UserIcon } from '@styled-icons/zondicons/UserSolidCircle';
import { useSelector, useDispatch } from 'react-redux';
import { modalSlice, userSlice } from './slices';

const FieldTitle = styled.div`
  margin-bottom: 8px;
`;

function Name() {
  const name = useSelector(state => state.modal.name || '');
  const dispatch = useDispatch();

  return (
    <div>
      <FieldTitle>
        <Typography>Name</Typography>
      </FieldTitle>
      <TextField
        fullWidth
        value={name}
        onChange={e =>
          dispatch(modalSlice.actions.setData({ name: e.target.value }))
        }
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

function Save({ closeModal }) {
  const name = useSelector(state => state.modal.name || '');
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
  const dispatch = useDispatch();

  function handleMenuClose(e) {
    setAnchorEl(null);
  }

  function closeModal() {
    dispatch(modalSlice.actions.clear());
    setOpenModal(false);
  }

  return (
    <>
      <IconButton onClick={e => setAnchorEl(e.currentTarget)}>
        <Avatar alt='Remy Sharp' src={''} />
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
        <Name />
        <ProfilePic />
        <Save closeModal={closeModal} />
        <Cancel closeModal={closeModal} />
      </Modal>
    </>
  );
}
