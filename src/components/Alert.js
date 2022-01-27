import React from "react";

const Alert = (props) => {
  // console.log(`props -----------------${props.alert}`);
  const capitalize = (word) => {
    // console.log("word", word);
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role='alert'
      >
        <strong>{capitalize(props.alert.type)} : </strong>
        {props.alert.msg}
      </div>
    )
  );
};

export default Alert;
