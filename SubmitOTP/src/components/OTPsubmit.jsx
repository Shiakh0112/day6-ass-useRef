import React, { useState, useRef } from "react";

function OTPsubmit() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  // Handle input focus and digit input
  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input box
      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle backspace for navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index]) {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  // Handle OTP paste
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    if (paste.length === 6 && /^\d+$/.test(paste)) {
      setOtp(paste.split(""));
      inputRefs.current[5].focus();
    }
  };

  // Handle OTP submission
  const handleSubmit = () => {
    if (otp.every((digit) => digit)) {
      alert(`Submitted OTP: ${otp.join("")}`);
      inputRefs.current.value = "";
    } else {
      alert("Please complete the OTP");
    }
  };

  return (
    <div>
      <h3>Enter OTP:</h3>
      <div onPaste={handlePaste}>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{
              width: "40px",
              margin: "5px",
              fontSize: "24px",
              textAlign: "center",
            }}
          />
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={otp.some((digit) => !digit)} // Disable until all fields are filled
        style={{ marginTop: "20px" }}
      >
        Submit OTP
      </button>
    </div>
  );
}

export default OTPsubmit;
