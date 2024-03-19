import { createContext } from "react";
import { theme } from "../Styles/theme";
import { ThemeModeProps } from "../components/ThemeToggle";
const { darkTheme } = theme;

interface ThemeContextProps {
  mode: ThemeModeProps;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  mode: darkTheme,
  toggleTheme: () => {
    return null;
  },
});
