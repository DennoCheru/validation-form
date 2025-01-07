function addError(field) {
    const errorField = document.createElement('span');
    errorField.classList.add('error-message');
    field.parentNode.insertBefore(errorField, field.nextSibling);
}

function showError(field, message) {
    const errorField = field.nextSibling;
    errorField.textContent = message;
    errorField.style.display = 'block';
}

function hideError(field) {
    const errorField = field.nextElementSibling;
    errorField.style.display = 'none';
}

export { addError, showError, hideError }