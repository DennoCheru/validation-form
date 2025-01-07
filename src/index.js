import './style.css';
import { addError } from './dom.js';
import { Validator } from './validation.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#userForm');
  const validator = new Validator(form);

  Object.values(validator.fields).forEach((field) => {
    addError(field);
  });

  form.querySelector('#email').addEventListener('input', () => validator.validateEmail());
  form.querySelector('#country').addEventListener('input', () => validator.validateCountry());
  form.querySelector('#zip-code').addEventListener('input', () => validator.validateZip());
  form.querySelector('#password').addEventListener('input', () => validator.validatePassword());
  form.querySelector('#confirm-password').addEventListener('input', () => validator.validateConfirmPassword());

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