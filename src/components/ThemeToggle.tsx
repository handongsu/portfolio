import { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch, { SwitchProps } from "@material-ui/core/Switch";
import { ThemeContext } from "../context/ThemeContext";

export interface ThemeModeProps {
  bgColor: string;
  textColor: string;
}

export interface CustomButtonProps extends SwitchProps {
  mode: ThemeModeProps;
}

const ToggleSwitch = withStyles({
  switchBase: {
    color: "#FFF",
    "&$checked": {
      color: "#a6ff4d",
      "& + $track": {
        backgroundColor: "gray",
        opacity: 0.5,
      },
    },

    "&$focusVisible $thumb": {
      border: "6px solid #a6ff4d",
    },
  },
  track: {
    border: `1px solid black`,
    backgroundColor: "white",
  },
  checked: {},
})((props: CustomButtonProps) => <Switch {...props} />);

function ThemeToggle() {
  const { mode, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <FormControlLabel
        control={
          <ToggleSwitch onChange={toggleTheme} name="checkedA" mode={mode} />
        }
        label={mode.textColor === "white" ? "Light mode" : "Dark mode"}
      />
    </div>
  );
}

export default ThemeToggle;
