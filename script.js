const password = document.querySelector('input[name="password"]');
const confirmation = document.querySelector('input[name="confirmation"');
const error = document.querySelector('.confirmation_error');
const form = document.querySelector('form');

confirmation.addEventListener('keyup', () => {
  if (password.value != confirmation.value) {
    confirmation.setCustomValidity('Invalid');
    form.reportValidity();
    error.style.display = 'block';
    error.textContent = 'Passwords dont match';
  } else {
    confirmation.setCustomValidity('');
    form.reportValidity();
    error.style.display = 'none';
    error.textContent = '';
  }
});
