import React, { useState, useRef, useEffect } from "react";
import Alert from "./alert";
import formStyles from "../styles/form.module.css";
import buttonStyles from "../styles/button.module.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    formErrors: {
      name: "",
      email: "",
    },
    isSubmitted: false,
  });
  const [alert, setAlert] = useState(null);

  const emailTest = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  const alertTimer = (alert) => {
    // how many seconds to display
    let secondsLeft = 7;

    // interval function set to messageTime and clear interval
    const messageTime = setInterval(() => {
      if (secondsLeft > 0) {
        setAlert(alert);
        secondsLeft--;
      } else {
        setAlert("");
        clearInterval(messageTime);
      }
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const { formErrors } = formData;

    switch (name) {
      case "name":
        formErrors.name =
          value.length < 3 && value.length > 0
            ? "Name must be a minimum of 3 characters"
            : "";
        break;
      case "email":
        formErrors.email =
          !emailTest.test(value) && value.length > 0
            ? "Please enter a valid email address"
            : "";
        break;
      case "message":
        formErrors.message =
          value.length < 2 && value.length > 0
            ? "If you are adding a message, it must be a minimum of 2 characters"
            : "";
        break;
      default:
        return;
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formIsValid = (formInfo) => {
    let valid = true;

    Object.values(formInfo).forEach((val) => {
      if (val.length > 0) {
        valid = false;
      }
    });

    return valid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // destrucuture formData
    const { formErrors, name, email, message } = formData;

    if (formIsValid(formErrors)) {
      setFormData({
        name,
        email,
        message,
        isSubmitted: true,
      });
    } else {
      return;
    }

    // if valid - submit the data
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alertTimer(data.message);
        }
      })
      .catch((error) => console.log(error));

    // then set form data back to original state
    setFormData({
      name: "",
      email: "",
      message: "",
      formErrors: {
        name: "",
        email: "",
      },
      isSubmitted: false,
    });
  };

  // destructure formErrors
  const { formErrors } = formData;

  return (
    <form className={formStyles.container}>
      <div className={formStyles.control}>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-400"
        >
          Name (required)
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className={formStyles.input}
          value={formData.name}
          onChange={handleInputChange}
        />
        {<small className={formStyles.error}>{formErrors.name}</small>}
      </div>

      <div className={formStyles.control}>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-400"
        >
          Email address (required)
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={formStyles.input}
          value={formData.email}
          onChange={handleInputChange}
        />
        {<small className={formStyles.error}>{formErrors.email}</small>}
      </div>

      <div className={formStyles.control}>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-400"
        >
          Message (optional)
        </label>
        <textarea
          type="text"
          name="message"
          id="message"
          className={`${formStyles.input} ${formStyles.textarea}`}
          value={formData.message}
          onChange={handleInputChange}
        />
        {<small className={formStyles.error}>{formErrors.message}</small>}
      </div>

      <div className="mt-5">
        <button
          type="submit"
          className={`${buttonStyles.btn} ${buttonStyles.primary}`}
          onClick={handleFormSubmit}
        >
          Send Message
        </button>
        {alert && <Alert>{alert}</Alert>}
      </div>
    </form>
  );
};

export default Form;
