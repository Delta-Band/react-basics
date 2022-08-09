/** @jsxImportSource @emotion/react */
import { HomePage } from '../pages';
import AppBar from './AppBar';
import { ThemeProvider } from '@emotion/react';
import getTheme from './theme';

function App() {
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
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
