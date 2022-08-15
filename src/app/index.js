/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
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
    <ThemeProvider theme={getTheme('dark')}>
      <div
        css={theme => ({
          width: '100%',
          height: '100%',
          position: 'fixed',
          left: 0,
          top: 0,
          background: theme.pallet.bg,
          color: theme.pallet.fg
        })}
      >
        <AppBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
