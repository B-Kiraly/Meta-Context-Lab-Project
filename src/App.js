// See Meta course 6, week 1, section 4 for the light/dark theme lab this is based on

import './App.css';
import { ThemeProvider, useTheme } from './providers/ThemeContext';
import { UserProvider } from "./providers/UserContext"
import LoggedInUser from "./components/LoggedInUser"
import Header from "./components/Header"
import Page from "./components/Page"
import React from 'react';
import { useState } from 'react';

function App() {

  // Block of code that changes the app's browser tab title on every button click
  let [titleIndex, setTitleIndex] = React.useState(0)
  let docTitleList = ["My page", "Website", "Hello World"]

  let handleClick = () => {  
    
    setTitleIndex(titleIndex + 1)
    if (titleIndex >= docTitleList.length-1) {
      setTitleIndex(0)
    }
}

  const [placeholder, setPlaceholder] = useState("No Custom Placeholder Text Yet")

  let fetchClick = () => {
    // Apparently fetch() usage should usually always be housed within useEffect functions
    let randNum = Math.ceil(Math.random() * 10)
    fetch(`https://jsonplaceholder.typicode.com/todos/${randNum}`)
      .then(response => response.json())
      .then(json => setPlaceholder(json.title))
      .catch((e) => console.log(e))
  }

  React.useEffect(() => {
    document.title = docTitleList[titleIndex]
  })

  // Back to regular programming
  const { theme } = useTheme();

  let buttonStyle = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light"? "black" : "white",
    border: theme === 'light' ? "0.1rem solid black" : "0.1rem solid white"
  }
  
  return (
    <div className="App" style={{backgroundColor: theme === "light" ? "white" : "black"}} >
      <Header />
      <Page placeholder={placeholder}/>
      <button onClick={handleClick} style={buttonStyle}>Change Page Title</button>
      <button onClick={fetchClick} style={buttonStyle}>Change Placeholder Text</button>
      <LoggedInUser buttonStyle={buttonStyle}/>
    </div>
  );
}

function Root() {
  return (
    <UserProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </UserProvider>
    
  );
}

export default Root;