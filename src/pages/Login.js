/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Typography, TextField, Button, Paper } from '@mui/material';
import { Modal, FieldTitle } from '../shared-components';
import logo from '../app/react.svg';

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
      </Modal>
    </div>
  );
}
