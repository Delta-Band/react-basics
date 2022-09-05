/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Modal, FieldTitle } from '../shared-components';
import { userSlice } from '../slices';
import logo from '../AppShell/react.svg';

function removeWhiteSapce(str) {
  return str.replace(/ /g, '');
}

function Email({ email, setEmail }) {
  return (
    <div>
      <FieldTitle>
        <Typography>Email</Typography>
      </FieldTitle>
      <TextField
        autoFocus
        fullWidth
        value={email}
        onChange={e => setEmail(removeWhiteSapce(e.target.value))}
      />
    </div>
  );
}

function Password({ pass, setPass }) {
  return (
    <div>
      <FieldTitle>
        <Typography>Password</Typography>
      </FieldTitle>
      <TextField
        type='password'
        autoFocus
        fullWidth
        value={pass}
        onChange={e => setPass(removeWhiteSapce(e.target.value))}
      />
    </div>
  );
}

function LoginBtn({ email, pass }) {
  const dispatch = useDispatch();

  function loginHandler() {
    dispatch(userSlice.actions.login({ email, pass }));
  }

  return (
    <Button variant='contained' size='large' onClick={loginHandler}>
      Let's go!
    </Button>
  );
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <img
        alt='logo'
        src={logo}
        css={{
          height: 142,
          transform: 'translateY(-210%)'
        }}
      />
      <Modal width={360} open title='Login'>
        <Email email={email} setEmail={setEmail} />
        <Password pass={pass} setPass={setPass} />
        <LoginBtn email={email} pass={pass} />
      </Modal>
    </div>
  );
}
