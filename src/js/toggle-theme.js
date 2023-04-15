const checkbox = document.getElementById('theme-checkbox');

const ref = {
  body: document.querySelector('body'),
  header: document.querySelector('.header_btn__shopping__light'),
};

const object = Object.keys(ref);
console.log(object);

if (localStorage.getItem('theme') === 'dark') {
  checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    getArray(object);
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
