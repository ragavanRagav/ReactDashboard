import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
// import axios from 'axios';

const App = () => {
  const routing = useRoutes(routes);
  // const data = axios.get('https://jsonkeeper.com/b/Q1HZ').then((res) => {
  //   console.log(res.json());
  // });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
