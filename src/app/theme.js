import { createTheme } from '@mui/material/styles';

const getTheme = mode => {
  const themObj = {
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            height: 48
          }
        }
      }
    }
  };
  if (mode === 'dark') {
    themObj.pallet = {
      bg: '#474851',
      fg: '#C7C7C7'
    };
  } else {
    themObj.pallet = {
      fg: '#474851',
      bg: '#C7C7C7',
      accent: '#437295'
    };
    Object.assign(themObj.components.MuiInputBase.styleOverrides.root, {
      backgroundColor: '#FFF'
    });
  }

  return createTheme(themObj);
};

export default getTheme;
