import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [textArea, setTextArea] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    console.log("showAlert");
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (darkMode) {
      setDarkMode(false);
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setDarkMode(true);
      document.body.style.backgroundColor = "#0f4c89";
      showAlert("Dark mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title='Text Utilities'
        mode={darkMode}
        toggleMode={toggleMode}
      ></Navbar>
      <Alert alert={alert}></Alert>
      <div className='container my-3'>
        <TextForm
          heading='Enter the text to analyze'
          textArea={textArea}
          setTextArea={setTextArea}
          mode={darkMode}
          showAlert={showAlert}
        ></TextForm>
        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
