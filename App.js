import React from "react";

import { ThemeProvider } from "styled-components";

import Home from "./src/pages/home";
const cores = {
  primary: "#14213D",
  secondary: "#FCA311",
  light: "#E5E5E5",
};

export default function App({ navigation }) {
  return (
    <ThemeProvider theme={cores}>
      <Home/>
    </ThemeProvider>
  );
}
