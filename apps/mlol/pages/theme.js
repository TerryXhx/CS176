import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3CB371',
      light: '#90EE90',
      dark: '	#006400',
    },
    secondary: {
      main: '#0A72A6',
      light: '#57BFF2',
      dark: '#074F73',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export { theme };