import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/router";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}
