import './style.css';
import { addError } from './dom.js';
import { Validator } from './validation.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#userForm');
  const validator = new Validator(form);

  Object.values(validator.fields).forEach((field) => {
    addError(field);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validator.validateAll()) {
      alert('High Five! Your form was submitted successfully.');
      form.reset();
    } else {
      alert('Please fix the errors in the form before submitting.');
    }
  });
});