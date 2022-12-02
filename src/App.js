import React from "react";
import "./App.css";
import MainRouter from "./MainRouter";
import { HashRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import CartProvider from "./CartContext";

const App = () => {
  return (
    <CartProvider>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainRouter />
        </ThemeProvider>
      </HashRouter>
    </CartProvider>
  );
};

export default App;
