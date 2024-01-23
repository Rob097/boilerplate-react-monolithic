import theme from "@/theme";
import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import React from "react";
import "@/index.scss";
import CustomRouterProvider from "@/Routes";
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>
      <CssBaseline />

      <CustomRouterProvider />

    </ThemeProvider>

  </React.StrictMode>
);