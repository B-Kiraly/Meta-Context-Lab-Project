// This is DIFFERENT from regular index.js (how, I do not yet know)
// Do NOT delete either index.js files in this project!!!!

import { useTheme } from "../providers/ThemeContext"
import "./Styles.css";
// Figure out the CSS side of things

const Switch = () => {
    const { theme, toggleTheme} = useTheme()
    return (
        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "light"}
            onChange={toggleTheme}
          />
          <span className="slider round" />
        </label>
      );
}

export default Switch