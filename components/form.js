import React, { useState } from "react";
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

  const emailTest = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
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

    const data = {
      name,
      email,
      message,
    };

    if (formIsValid(formErrors)) {
      setFormData({
        name: data.name,
        email: data.email,
        message: data.message,
        isSubmitted: true,
      });
    } else {
      return;
    }

    // if valid - submit the data
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
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
          Name
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
          Email address
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
          Message
        </label>
        <textarea
          type="text"
          name="message"
          id="message"
          className={`${formStyles.input} ${formStyles.textarea}`}
          value={formData.message}
          onChange={handleInputChange}
        />
      </div>

      <div className="mt-5">
        <button
          type="submit"
          className={`${buttonStyles.btn} ${buttonStyles.primary}`}
          onClick={handleFormSubmit}
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default Form;
