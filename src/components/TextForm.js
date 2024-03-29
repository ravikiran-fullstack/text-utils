import React from "react";
import { useState, useRef } from "react";

const TextForm = ({ heading, textArea, setTextArea, mode, showAlert }) => {
  const [wordsCount, setWordsCount] = useState(0);
  const [charsCount, setCharsCount] = useState(0);
  const ref = useRef(null);

  const handleUpClick = () => {
    setTextArea(textArea.toUpperCase());
    ref?.current?.focus?.();
    showAlert("Text converted to uppercase", "success");
  };

  const handleLowClick = () => {
    setTextArea(textArea.toLowerCase());
    ref?.current?.focus?.();
    showAlert("Text converted to lowercase", "success");
  };

  const handleReset = () => {
    setTextArea("");
    setWordsCount(0);
    setCharsCount(0);
    ref?.current?.focus?.();
    showAlert("Text cleared", "success");
  };

  const handleOnTextChange = (event) => {
    // console.log("event.target.value", event.target.value);
    setTextArea(event.target.value);

    setWordsCount(countWords(event.target.value));
    setCharsCount(countChars(event.target.value));
  };

  const countWords = (str) => {
    console.log(str);
    if (str === "") {
      return 0;
    }
    // return str.trim().split(" ").length;
    // return str.split(" ").filter((ele) => {
    //   return ele.length !== 0;
    // }).length;
    return str.split(/\s+/).filter((ele) => {
      return ele.length !== 0;
    }).length;
    // return str.trim().split(/\s+/).length;
  };

  const countChars = (str) => {
    return str.split(" ").join("").length;
  };

  return (
    <>
      <div
        className='mb-3'
        style={{
          color: mode ? "white" : "black",
        }}
      >
        <h3 htmlFor='exampleFormControlTextarea1' className='form-label mb-4'>
          {heading}
        </h3>
        <textarea
          className='form-control'
          id='exampleFormControlTextarea1'
          rows='8'
          autoFocus
          value={textArea}
          onChange={handleOnTextChange}
          ref={ref}
          style={{
            backgroundColor: mode ? "#213061" : "white",
            color: mode ? "white" : "black",
          }}
        ></textarea>
        <button
          disabled={textArea.length === 0}
          className='btn btn-primary my-3'
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          disabled={textArea.length === 0}
          className='btn btn-primary m-3'
          onClick={handleLowClick}
        >
          Covert to LowerCase
        </button>
        <button className='btn btn-danger m-3' onClick={handleReset}>
          Reset
        </button>
      </div>
      <div
        className='container my-3'
        style={{
          color: mode ? "white" : "black",
        }}
      >
        <h2>Your Text summary</h2>
        <p>
          {wordsCount} words, and {charsCount} characters
        </p>
        <p>{Number(wordsCount * 0.008).toFixed(2)} Minutes read</p>
        <h3>Preview</h3>
        {textArea && <p>{textArea}</p>}
        {!textArea && <p>Enter your text above to preview it here</p>}
      </div>
    </>
  );
};

export default TextForm;
