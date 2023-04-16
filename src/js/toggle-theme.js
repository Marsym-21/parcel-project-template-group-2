const checkbox = document.getElementById('theme-checkbox');

const ref = {
  body: document.querySelector('body'),
  header: document.querySelector('.header_btn__shopping'),
};

let newObject;
export function getObject(obj) {
  newObject = { ...ref, ...obj };
  console.log(newObject);
}
console.log(newObject);

if (localStorage.getItem('theme') === 'dark') {
  checkbox.checked = true;
}

// checkbox.addEventListener('change', () => {
//   if (checkbox.checked) {
//     getArrayAddList(object);
//     localStorage.setItem('theme', 'dark');
//   } else {
//     getArrayRemoveList(object);
//     localStorage.setItem('theme', 'light');
//   }
// });

// function getArrayAddList(array) {
//   array.forEach(data => ref[data].classList.add('dark'));
//   return array;
// }

// function getArrayRemoveList(array) {
//   array.forEach(data => ref[data].classList.remove('dark'));
//   return array;
// }
