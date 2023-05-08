import { useTheme } from '../providers/ThemeContext';
import Content from "./Content"

const Title = ({ children }) => {
    const { theme } = useTheme();
    return (
      <h2 style={{color: theme === "light" ? "black" : "white",}}>
        {children}
      </h2>
    );
  };

const Page = (props) => {

    return (
      <div className="Page">
        <Title>When it comes to dough</Title>
        <Content />
        <Title>{props.placeholder}</Title>
      </div>
    );
  };

export default Page