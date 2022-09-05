/** @jsxImportSource @emotion/react */
import { AppBar as MuiAppBar, Toolbar, IconButton } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useLocation } from 'react-router-dom';
import getTheme from './theme';
import logo from './react.svg';
import ProfleMenu from './ProfleMenu';

export default function AppBar() {
  const location = useLocation();
  console.log(location);
  return (
    <ThemeProvider theme={getTheme('light')}>
      <MuiAppBar
        css={theme => ({
          background: theme.colors.bg,
          color: theme.colors.fg,
          height: theme.appbarHeight,
          transition: theme.transition,
          transform: `translateY(${
            location.pathname === '/login' ? '-100%' : '0%'
          })`
        })}
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
            <IconButton>
              <img
                alt='logo'
                src={logo}
                css={{
                  height: 42
                }}
              />
            </IconButton>
          </div>
          <ProfleMenu />
        </Toolbar>
      </MuiAppBar>
    </ThemeProvider>
  );
}
