/** @jsxImportSource @emotion/react */

import { store } from '../store';
import { Provider } from 'react-redux';
import AppBar from './AppBar';
import { ThemeProvider } from '@emotion/react';
import getTheme from '../theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login } from '../pages';
import Auth from './Auth';

function AppShell() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={getTheme('dark')}>
        <div
          css={theme => ({
            width: '100%',
            height: '100%',
            position: 'fixed',
            left: 0,
            top: 0,
            background: theme.colors.bg,
            color: theme.colors.fg,
            paddingBlockStart: theme.appbarHeight
          })}
        >
          <BrowserRouter>
            <AppBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
            </Routes>
            <Auth />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default AppShell;
