import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./style/globalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";
import { CONSTANT } from "./helpers/constant";

import Login from "./routes/Login";
import Signup from "./routes/Signup";

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={CONSTANT.URL.LOGIN} element={<Login />} />
          <Route path={CONSTANT.URL.SIGNUP} element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
