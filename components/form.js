import React, { useState } from "react";
import Alert from "./alert";
import useFetch from "../lib/useFetch";
import { validateEmail } from "../lib/validate";
import useAlert from "../lib/useAlert";
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
  const { post } = useFetch("/api");
  const { alert, alertMessage } = useAlert();

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
          !validateEmail(value) && value.length > 0
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // destrucuture formData
    const { name, email } = formData;

    try {
      // if valid - submit the data
      if (!name) {
        alertMessage("Name field cannot be empty");
        return;
      }

      if (!email) {
        alertMessage("Email field cannot be empty");
        return;
      }

      if (!validateEmail(email)) {
        alertMessage("Please enter a valid email address");
        return;
      }

      post("/contact", {
        ...formData,
      })
        .then((data) => {
          if (data) {
            alertMessage(data.message);
          }
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
        })
        .catch((error) => {
          console.log(error);
          alertMessage(error.message);
        });
    } catch (error) {
      alertMessage("Name or Email Address fields are empty");
      return;
    }

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
          disabled={!formData.name || !formData.email}
        >
          Send Message
        </button>
        {alert && <Alert>{alert}</Alert>}
      </div>
    </form>
  );
};

export default Form;
