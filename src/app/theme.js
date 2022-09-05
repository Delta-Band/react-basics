import { createTheme } from '@mui/material/styles';

const getTheme = mode => {
  const themObj = {
    typography: {
      color: '#000'
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            height: 48
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            fontWeight: 300,
            letterSpacing: 1,
            '&:hover': {
              boxShadow: 'none',
              backgroundColor: '#437295',
              color: '#C7C7C7'
            }
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {}
        }
      }
    },
    appbarHeight: 64,
    transition: '0.4s cubic-bezier(.22,.08,.39,1)'
  };

  if (mode === 'dark') {
    // Dark theme
    themObj.colors = {
      bg: '#474851',
      fg: '#C7C7C7'
    };
    themObj.palette = {
      mode: 'dark'
    };
  } else {
    // Light theme
    themObj.colors = {
      fg: '#474851',
      bg: '#C7C7C7',
      accent: '#437295',
      grey: '#A7A7A7'
    };

    themObj.palette = {
      primary: {
        main: '#323232'
      },
      secondary: {
        main: '#A7A7A7'
      }
    };

    Object.assign(themObj.components.MuiInputBase.styleOverrides.root, {
      backgroundColor: '#FFF'
    });

    Object.assign(themObj.components.MuiPaper.styleOverrides.root, {
      backgroundColor: '#C7C7C7',
      color: '#474851'
    });
  }

  return createTheme(themObj);
};

export default getTheme;
