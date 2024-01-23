import { Outlet } from "react-router-dom";
import logo from '@/logo.svg';
import { Box, Typography } from "@mui/material";
import "@/index.scss";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className="font-bold underline">
          Hello world 3!
        </h1>
        <Box
          sx={(theme) => ({
            background: theme.palette.primary.main
          })}
        >
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
        </Box>
        <Typography variant="h1">
            Hello world!
          </Typography>
      </header>

      <Outlet />
      
    </div>
  );
}

export default App;
