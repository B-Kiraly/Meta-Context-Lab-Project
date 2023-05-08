import { useTheme } from '../providers/ThemeContext';
import Switch from "../Switch/Index"

const Title = ({ children }) => {
    const { theme } = useTheme();
    return (
      <h2
        style={{
          color: theme === "light" ? "black" : "white",
        }}
      >
        {children}
      </h2>
    );
  };

const Header = () => {
    return (
      <header>
        <Title>Little Lemon 🍕</Title>
        <Switch />
      </header>
    );
  };

  export default Header