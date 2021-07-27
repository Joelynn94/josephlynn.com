import React from 'react'

import formStyles from "../styles/form.module.css"

const Form = () => {
  return (
    <form>

      <div className={formStyles.control}>
        <label htmlFor="full-name" className="block text-sm font-medium text-gray-400">Name</label>
        <input type="text" name="full-name" id="full-name" className={formStyles.input} />
      </div>

      <div className={formStyles.control}>
        <label htmlFor="email-address" className="block text-sm font-medium text-gray-400">Email address</label>
        <input type="text" name="email-address" id="email-address" className={formStyles.input} />
      </div>

      <div className={formStyles.control}>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
        <textarea type="text" name="message" id="message" className={formStyles.input} />
      </div>

      <div className="mt-5">
        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-secondary-100 bg-primary-100 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-100">
          Send Message
        </button>
      </div>

    </form>
  );
};

export default Form;
