import { useTheme } from '../providers/ThemeContext';

const Paragraph = ({ children }) => {
    const { theme } = useTheme();
    return (
      <p
        style={{color: theme === "light" ? "black" : "white",}}>
        {children}
      </p>
    );
  };

const Content = () => {
    return (
      <div>
        <Paragraph>
          We are a pizza loving family. And for years, I searched and searched and
          searched for the perfect pizza dough recipe. I tried dozens, or more.
          And while some were good, none of them were that recipe that would
          make me stop trying all of the others.
        </Paragraph>
      </div>
    );
  };

export default Content