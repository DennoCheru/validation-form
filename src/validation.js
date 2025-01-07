import { showError, hideError } from './dom.js';

class Validator{
    constructor(form) {
        this.form = form;
        this.fields = {
            email: form.querySelector('#email'),
            country: form.querySelector('#country'),
            zip: form.querySelector('#zip-code'),
            password: form.querySelector('#password'),
            confirmPassword: form.querySelector('#confirm-password'),
        };

        this.validattionRules = {
            email: this.validateEmail,
            country: this.validateCountry,
            zip: this.validateZip,
            password: this.validatePassword,
            confirmPassword: this.validateConfirmPassword
        };

        this.addEventListeners();
    }

    addEventListeners() {
        Object.keys(this.fields).forEach((fieldName) => {
            const field = this.fields[fieldName];
            const validate = this.validattionRules[fieldName].bind(this);

            field.addEventListener('input', validate);
            field.addEventListener('blur', validate);
        });
    }

    validateEmail() {
        const emailField = this.fields.email;
        const email = emailField.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            showError(emailField, 'Email is required');
            return false;
        } else if (!emailPattern.test(email)) {
            showError(emailField, 'Please enter a valid email address.');
            return false
        }

        hideError(emailField);
        return true;
    }

    validateCountry() {
        const countryField = this.fields.country;
        const country = countryField.value.trim();

        if (!country) {
            showError(countryField, 'Country is required.')
            return false;
        }

        hideError(countryField);
        return true;
    }

    validateZip() {
        const zipCodeField = this.fields.zip;
        const zipCode = zipCodeField.value.trim();

        if(!zipCode) {
            showError(zipCodeField, 'Zip Code is required');
            return false;
        }

        hideError(zipCodeField);
        return true;
    }

    validatePassword() {
        const passwordField = this.fields.password;
        const password = passwordField.value.trim();
        
        if (!password) {
            showError(passwordField, 'Password is required');
            return false;
        } else if (password.length < 8) {
            showError(passwordField, 'Password must be at least 8 characters long.')
            return false;
        }

        hideError(passwordField);
        return true;
    }

    validateConfirmPassword() {
        const passwordField = this.fields.password;
        const confirmPasswordField = this.fields.confirmPassword;
        const confirmPassword = confirmPasswordField.value.trim();

        if (!confirmPassword) {
            showError(confirmPasswordField, 'Please confirm your password');
            return false;
        } else if (confirmPassword !== passwordField.value.trim()) {
            showError(confirmPasswordField, 'Passwords do not match');
            return false;
        }

        hideError(confirmPasswordField)
        return true;
    }

    validateAll() {
        const isEmailValid = this.validateEmail();
        const isCountryValid = this.validateCountry();
        const isZipCodeValid = this.validateZip();
        const isPasswordValid = this.validatePassword();
        const isConfirmPasswordValid = this.validateConfirmPassword();

        return (
            isEmailValid &&
            isCountryValid &&
            isZipCodeValid &&
            isPasswordValid &&
            isConfirmPasswordValid
        );
    }
}

export { Validator }