/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import AppBar from './AppBar';
import { ThemeProvider } from '@emotion/react';
import getTheme from './theme';
import api from '../api';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login } from '../pages';

function App() {
  useEffect(() => {
    async function getUser() {
      const userData = await api.user.get();
      console.log('userData', userData);
    }
    getUser();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={getTheme('dark')}>
        <AppBar />
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
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
