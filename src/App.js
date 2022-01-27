import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
function App() {
  const [textArea, setTextArea] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    if (darkMode) {
      setDarkMode(false);
      document.body.style.backgroundColor = "white";
    } else {
      setDarkMode(true);
      document.body.style.backgroundColor = "#0f4c89";
    }
  };
  return (
    <>
      <Navbar
        title='Text Utilities'
        mode={darkMode}
        toggleMode={toggleMode}
      ></Navbar>
      <div className='container my-3'>
        <TextForm
          heading='Enter the text to analyze'
          textArea={textArea}
          setTextArea={setTextArea}
          mode={darkMode}
        ></TextForm>
        <About></About>
      </div>
    </>
  );
}

export default App;
