import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./context/ThemeContext";
// import Layout from "./components/Layout";
import RouterComponent from "./RouterComponent";
import GlobalStyle from "./Styles/GlobalStyles";
import { theme } from "./Styles/theme";
import { useLightMode } from "./hooks/useLightMode";
import { BrowserRouter as Router } from "react-router-dom";

const { darkTheme, lightTheme } = theme;

function App() {
  const { mode, toggleTheme } = useLightMode();

  return (
    <>
      <ThemeContext.Provider value={{ mode, toggleTheme }}>
        <Router>
          <ThemeProvider theme={theme}>
            <GlobalStyle theme={mode === darkTheme ? darkTheme : lightTheme} />
            <RouterComponent />
          </ThemeProvider>
        </Router>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
