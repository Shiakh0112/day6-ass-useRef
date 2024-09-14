// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from "react";

function InputAlertBg() {
  const FocusInput = useRef(null);
  const bgColor = useRef(null);
  const isBgColor = useRef(false);
  useEffect(() => {
    FocusInput.current.focus();
    console.log(FocusInput.current.value);
  }, []);

  const AlertInputValue = () => {
    alert("Your input value is: " + FocusInput.current.value);
  };
  const ColorChange = () => {
    isBgColor.current = !isBgColor.current;
    if (isBgColor.current) {
      bgColor.current.style.backgroundColor = "gray";
    } else {
      bgColor.current.style.backgroundColor = "blue";
    }
  };

  return (
    <div>
      <div>
        <input type="text" ref={FocusInput} />
        <button onClick={AlertInputValue}> Show input</button>
      </div>
      <div
        ref={bgColor}
        style={{
          marginTop: "20px",
          width: "200px",
          height: "200px",
          backgroundColor: "blue", // Initial background color
        }}
      ></div>
      <button onClick={ColorChange}>Change Theme </button>
    </div>
  );
}

export default InputAlertBg;
