import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { ThemeProvider } from '@emotion/react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme/theme';
import useLocalStorage from 'use-local-storage';
import styles from './assets/scss/homepage/homepage.module.scss';
import Router from './Router';
function App() {
  const [themeScheme, setThemeScheme] = useLocalStorage<string>('rhythmitica-app-theme', 'dark');
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.App} data-theme={themeScheme}>
        <Router setThemeScheme={setThemeScheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
