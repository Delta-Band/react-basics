/** @jsxImportSource @emotion/react */
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Button
} from '@mui/material';
import { Menu as MenuIcon } from '@styled-icons/boxicons-regular/Menu';
import { ThemeProvider } from '@emotion/react';
import getTheme from './theme';
import logo from './react.svg';

export default function AppBar() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <MuiAppBar
        css={theme => ({ background: theme.pallet.bg, color: theme.pallet.fg })}
      >
        <Toolbar
          css={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}
          >
            {/* <IconButton>
              <MenuIcon size={32} />
            </IconButton> */}
            <IconButton>
              <img
                alt='logo'
                src={logo}
                css={{
                  height: 42
                }}
              />
              {/* <Typography variant='h6'>My React SPA</Typography> */}
            </IconButton>
          </div>
          <IconButton>
            <Avatar alt='Remy Sharp' src={''} />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
    </ThemeProvider>
  );
}
