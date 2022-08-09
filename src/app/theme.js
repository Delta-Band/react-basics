import { createTheme } from '@mui/material/styles';

const getTheme = mode => {
  const themObj = {};
  if (mode === 'dark') {
    themObj.pallet = {
      bg: '#474851',
      fg: '#C7C7C7'
    };
  } else {
    themObj.pallet = {
      fg: '#474851',
      bg: '#C7C7C7'
    };
  }

  return createTheme(themObj);
};

export default getTheme;
