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
    }
}

function hideError(field) {
    const errorField = field.parentNode.querySelector('.error-message');
    if (errorField) {
        errorField.style.display = 'none';
    }
}

export { addError, showError, hideError }