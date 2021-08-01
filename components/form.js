import React, { useState } from "react";
import formStyles from "../styles/form.module.css";
import buttonStyles from "../styles/button.module.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    submitted: false,
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        console.log("Successful!");
        setFormData({
          name: data.name,
          email: data.email,
          message: data.message,
          submitted: true,
        });
      }
    });

    setFormData({
      name: "",
      email: "",
      message: "",
      submitted: false,
    });
  };

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
      </div>

      <div className={formStyles.control}>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-400"
        >
          Email address
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className={formStyles.input}
          value={formData.email}
          onChange={handleInputChange}
        />
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
