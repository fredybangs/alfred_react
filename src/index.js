import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider, createMuiTheme} from '@material-ui/core'
import { teal, green, red } from '@material-ui/core/colors';
import { Provider } from 'react-redux'
import store from './store'

const theme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: { 
            main: '#2196f3',
            light: '#e3f2fd',
        },
        backcolor: {
            main:'#e0f2f1',
        },
        warning: {
            main: '#ffc071',
            dark: '#ffb25e',
          },
          error: {
            xLight: red[50],
            main: red[500],
            dark: red[700],
          },
          success: {
            xLight: green[50],
            main: green[500],
            dark: green[700],
          },
        // type: 'dark'
    },
    typography: {
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 14,
        fontWeightLight: 300, // Work Sans
        fontWeightRegular: 400, // Work Sans
        fontWeightMedium: 700, // Roboto Condensed
        fontFamilySecondary: "'Roboto Condensed', sans-serif",
    },
})

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
