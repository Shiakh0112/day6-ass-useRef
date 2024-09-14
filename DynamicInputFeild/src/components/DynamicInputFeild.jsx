import React, { useRef } from "react";

function DynamicInputFeild() {
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const emailError = useRef(null);
  const passError = useRef(null);
  const HandleFocusInput = (e) => {
    e.current.focus();
  };
  // Email validation
  const EmailValidation = () => {
    const email = emailInput.current.value;
    if (!email.endsWith("@gmail.com")) {
      emailError.current.textContent = "Email must end with @gmail.com!";
    } else {
      emailError.current.textContent = "";
    }
  };
  const passwordValidation = () => {
    const password = passwordInput.current.value;
    if (password.length < 6) {
      passError.current.textContent = "pass must be between 6 and";
    } else {
      passError.current.textContent = "";
    }
  };
  const HandleSubmitForm = (event) => {
    event.preventDefault();
    const formData = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };

    if (
      formData.email.endsWith("@gmail.com") &&
      formData.password.length >= 6
    ) {
      alert("Form not submit successfully.");
      console.log("Form submitted successfully!", formData);
    } else {
      console.log("Validation failed!");
    }
    nameInput.current.value = "";
    emailInput.current.value = "";
    passwordInput.current.value = "";
  };
  return (
    <>
      <div className="input-container">
        <form onSubmit={HandleSubmitForm}>
          <div className="name-container">
            <input ref={nameInput} type="text" placeholder="Enter Your name" />
            <button onClick={() => HandleFocusInput(nameInput)}>
              Focus Input
            </button>
          </div>
          <div className="email-container">
            <input
              ref={emailInput}
              type="text"
              placeholder="Enter Your name"
              onChange={EmailValidation}
            />
            <button onClick={() => HandleFocusInput(emailInput)}>
              Focus Input
            </button>
            <p ref={emailError} style={{ color: "red" }}></p>
          </div>
          <div className="password-container">
            <input
              ref={passwordInput}
              type="password"
              placeholder="Enter Your name"
              onChange={passwordValidation}
            />
            <button onClick={() => HandleFocusInput(passwordInput)}>
              Focus Input
            </button>
            <p ref={passError} style={{ color: "red" }}></p>
          </div>
          <div className="submit-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default DynamicInputFeild;
