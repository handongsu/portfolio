import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./context/ThemeContext";
import Layout from "./components/Layout";
import GlobalStyle from "./Styles/GlobalStyles";
import { theme } from "./Styles/theme";
import { useLightMode } from "./hooks/useLightMode";

const { darkTheme, lightTheme } = theme;

function App() {
  const { mode, toggleTheme } = useLightMode();

  return (
    <>
      <ThemeContext.Provider value={{ mode, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <GlobalStyle theme={mode === darkTheme ? darkTheme : lightTheme} />
          <Layout />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
