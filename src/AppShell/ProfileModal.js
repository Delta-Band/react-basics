/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Modal } from '../shared-components';
import { UserSolidCircle as UserIcon } from '@styled-icons/zondicons/UserSolidCircle';
import { Typography, TextField, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { userSlice } from '../slices';
import { FieldTitle } from '../shared-components';

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

function Name({ name, setName }) {
  return (
    <div>
      <FieldTitle>
        <Typography>Name</Typography>
      </FieldTitle>
      <TextField
        autoFocus
        fullWidth
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  );
}

export default function ProfileModal({ openModal, closeModal }) {
  const user = useSelector(state => state.user);
  const [name, setName] = useState(user.name);

  return (
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
  );
}
