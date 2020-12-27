import React, { Fragment, useState } from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import contactFormStyles from './contactForm.module.scss';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const showNameLabel = name ? { opacity: 1 } : { opacity: 0 };
  const showEmailLabel = email ? { opacity: 1 } : { opacity: 0 };
  const showMessageLabel = message ? { opacity: 1 } : { opacity: 0 };

  const handleInputChange = event => {
    const { id, value } = event.target;
    switch (id) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    trackCustomEvent({
      category: 'Submit Button',
      action: 'Click',
      label: 'Contact',
    });
    return '';
  };
  return (
    <Fragment key="ContactForm">
      <form id="form" className={contactFormStyles.form}>
        <div className={contactFormStyles.formGroup}>
          <label style={showNameLabel} className={contactFormStyles.label}>
            YOUR NAME
          </label>
          <input
            onChange={handleInputChange}
            id="name"
            value={name}
            placeholder="YOUR NAME"
          />
        </div>
        <div className={contactFormStyles.formGroup}>
          <label style={showEmailLabel} className={contactFormStyles.label}>
            YOUR EMAIL
          </label>
          <input
            onChange={handleInputChange}
            placeholder="YOUR EMAIL"
            id="email"
          />
        </div>
        <div className={contactFormStyles.formGroup}>
          <label style={showMessageLabel} className={contactFormStyles.label}>
            YOUR MESSAGE
          </label>
          <textarea
            onChange={handleInputChange}
            id="message"
            className={contactFormStyles.message}
            placeholder="YOUR MESSAGE"
          />
        </div>
        <div className={contactFormStyles.formGroup}>
          <button
            className={contactFormStyles.button}
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default ContactForm;
