import theme from "@/theme";
import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import React from "react";
import "@/index.scss";
import CustomRouterProvider from "@/Routes";
import CssBaseline from '@mui/material/CssBaseline';
import { I18nextProvider } from 'react-i18next';
import i18n, { defaultNS } from '@/assets/locales/i18n';
import { CustomSnackProvider, SnackbarUtilsConfigurator } from "@/components/alerts/snack";
import { Suspense } from "react";
import Loading from "@/components/loading";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Suspense fallback={<Loading />}>

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <CustomSnackProvider>

          <I18nextProvider i18n={i18n} defaultNS={defaultNS}>

            <SnackbarUtilsConfigurator />
            <CustomRouterProvider />

          </I18nextProvider>

        </CustomSnackProvider>

      </ThemeProvider>

    </Suspense>

  </React.StrictMode>
);