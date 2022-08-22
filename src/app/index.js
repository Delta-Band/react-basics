/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import AppBar from './AppBar';
import { ThemeProvider } from '@emotion/react';
import getTheme from './theme';
import api from '../api';

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
        <div
          css={theme => ({
            width: '100%',
            height: '100%',
            position: 'fixed',
            left: 0,
            top: 0,
            background: theme.colors.bg,
            color: theme.colors.fg
          })}
        >
          <AppBar />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
