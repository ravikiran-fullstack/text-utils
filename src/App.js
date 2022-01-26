import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
function App() {
  const [textArea, setTextArea] = useState("");
  return (
    <>
      <Navbar title='Text Utilities'></Navbar>
      <div className='container my-3'>
        {/* <TextForm
          heading='Enter the text to analyze'
          textArea={textArea}
          setTextArea={setTextArea}
        ></TextForm> */}
        <About></About>
      </div>
    </>
  );
}

export default App;
