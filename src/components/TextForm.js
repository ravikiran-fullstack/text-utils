import React from "react";
import { useState, useRef } from "react";

const TextForm = ({ heading, textArea, setTextArea }) => {
  const [wordsCount, setWordsCount] = useState(0);
  const [charsCount, setCharsCount] = useState(0);
  const ref = useRef(null);

  const handleUpClick = () => {
    setTextArea(textArea.toUpperCase());
    ref?.current?.focus?.();
  };

  const handleLowClick = () => {
    setTextArea(textArea.toLowerCase());
    ref?.current?.focus?.();
  };

  const handleReset = () => {
    setTextArea("");
    setWordsCount(0);
    setCharsCount(0);
    ref?.current?.focus?.();
  };

  const handleOnTextChange = (event) => {
    console.log("on change");
    setTextArea(event.target.value);
    setWordsCount(countWords(textArea));
    setCharsCount(countChars(textArea));
  };

  const countWords = (str) => {
    return str.split(" ").length;
  };

  const countChars = (str) => {
    return str.split(" ").join("").length + 1;
  };

  return (
    <>
      <div className='mb-3'>
        <label htmlFor='exampleFormControlTextarea1' className='form-label'>
          {heading}
        </label>
        <textarea
          className='form-control'
          id='exampleFormControlTextarea1'
          rows='8'
          autoFocus
          value={textArea}
          onChange={handleOnTextChange}
          ref={ref}
        ></textarea>
        <button className='btn btn-primary my-3' onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className='btn btn-primary m-3' onClick={handleLowClick}>
          Covert to LowerCase
        </button>
        <button className='btn btn-danger m-3' onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className='container my-3'>
        <h2>Your Text summary</h2>
        <p>
          {wordsCount} words, and {charsCount} characters
        </p>
        <p>{Number(wordsCount * 0.008).toFixed(2)} Minutes read</p>
        <h3>Preview</h3>
        <p>{textArea}</p>
      </div>
    </>
  );
};

export default TextForm;