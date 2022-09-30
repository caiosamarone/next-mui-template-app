import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: 'Noto Sans, sans-serif'
  },
  palette: {
    primary: {
      main: '#0066b3',
      light: '#d096cf',
      dark: '#0056a3',
    },
    secondary: {
      main: '#812990',
      light: '#b589be',
      dark: '#6a2383',
    },
    text:{
      disabled: '#2222226a',
      primary: '#000000de',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#201d1d28',
      paper: '#fff',

    },
    info: {
      main: '#0000001f'
    }
  },
  components: {
    MuiCssBaseline:{
      styleOverrides: (themeParam) => `
      *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
      },
      body, html, #root {
        height: 100vh;
        width: 100%;
        scroll-behavior: smooth;
      },
      h1,h2,h3,p {
        font-family: 'Noto Sans';
      },
      body {
        background: ${themeParam.palette.background.default};
        font-family: Noto Sans, sans-serif;
      },
      ul {
        list-style: none;
        margin: 0px;
        padding: 0px;
      },
      a {
        textDecoration: none;
      },
    `,
    },
  },
});

export default theme;
