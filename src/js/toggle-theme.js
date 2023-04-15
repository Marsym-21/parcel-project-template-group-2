const checkbox = document.getElementById('theme-checkbox');

const ref = {
  body: document.querySelector('body'),
  header: document.querySelector('.header_btn__shopping'),
};
const object = Object.keys(ref);
console.log(object);

if (localStorage.getItem('theme') === 'dark') {
  checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    console.log(getArrayAddList(object));
    ref.body.classList.add('dark');
    ref.header.classList.add('dark');
    getArrayAddList(object);
    localStorage.setItem('theme', 'dark');
  } else {
    ref.body.classList.remove('dark');
    ref.header.classList.remove('dark');
    getArrayRemoveList(object);
    localStorage.setItem('theme', 'light');
  }
});

function getArrayAddList(array) {
  const newArray = array.map(data => `ref.${data}.classList.add('dark');`);
  return newArray;
}

function getArrayRemoveList(array) {
  const newArray = array.map(data => `ref.${data}.classList.remove('dark');`);
  return newArray;
}
