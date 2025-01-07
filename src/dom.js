function addError(field) {
    const errorField = document.createElement('span');
    errorField.textContent = '';
    errorField.classList.add('error-message');
    field.parentNode.insertBefore(errorField, field.nextSibling);
}

function showError(field, message) {
    const errorField = field.parentNode.querySelector('.error-message');
    if (errorField) {
        errorField.textContent = message;
        errorField.style.display = 'block';

        field.classList.remove('valid');
        field.classList.add('error');
    }
}

function hideError(field) {
    const errorField = field.parentNode.querySelector('.error-message');
    if (errorField) {
        errorField.style.display = 'none';

        field.classList.remove('error');
        field.classList.add('valid');
    }
}

export { addError, showError, hideError }