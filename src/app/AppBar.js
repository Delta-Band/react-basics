/** @jsxImportSource @emotion/react */
import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';
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
            gap: 24
          }}
        >
          <MenuIcon size={32} />
          <div
            css={{
              display: 'flex',
              gap: 16,
              alignItems: 'center'
            }}
          >
            <img
              alt='logo'
              src={logo}
              css={{
                height: 42
              }}
            />
            <Typography variant='h6'>My React SPA</Typography>
          </div>
        </Toolbar>
      </MuiAppBar>
    </ThemeProvider>
  );
}
