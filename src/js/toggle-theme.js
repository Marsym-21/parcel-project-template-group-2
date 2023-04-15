const checkbox = document.getElementById('theme-checkbox');

const ref = {
  body: document.querySelector('body'),
  header: document.querySelector('.header_btn__shopping__light'),
};

const object = Object.keys(ref);
console.log(object);

// const white = document.querySelectorAll('.white');

// body.classList.add('white');

// Check local storage for theme preference
if (localStorage.getItem('theme') === 'dark') {
  checkbox.checked = true;
  // white.classList.add('dark');
}

// Toggle theme on checkbox change
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    getArray(object);
    // ref.body.classList.add('dark');
    // ref.header.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    getArrayRemoveList(object);
    localStorage.setItem('theme', 'light');
  }
});

function getArrayAddList(array) {
  return array.map(data => data.classList.add('dark'));
}
function getArrayRemoveList(array) {
  return array.map(data => data.classList.remove('dark'));
}
