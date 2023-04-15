const checkbox = document.getElementById('theme-checkbox'); 
const body = document.querySelector('body');

// Check local storage for theme preference
if (localStorage.getItem('theme') === 'dark') {
  checkbox.checked = true;
  body.classList.add('dark');
}

// Toggle theme on checkbox change
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});