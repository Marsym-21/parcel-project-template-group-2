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
    ref.body.classList.add('dark');
    ref.header.classList.add('dark');
    getArrayAddList(object);
    localStorage.setItem('theme', 'dark');
  } else {
    ref.body.classList.remove('dark');
    ref.header.classList.remove('dark');
    // getArrayRemoveList(object);
    localStorage.setItem('theme', 'light');
  }
});

function getArrayAddList(array) {
  console.log(array);
  const newArray = array.map(data => data.classList.add('dark'));
  console.log(newArray);
}

// function getArrayRemoveList(array) {
//   return array.map(data => data.classList.remove('dark'));
// }
