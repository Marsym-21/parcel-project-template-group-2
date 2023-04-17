import './js/header-theme.js';
import './js/render-hp-default-markup.js';
import './js/support.js';
import './js/toggle-theme.js';
import './js/categories.js';
import './js/mobile-menu.js';
import './js/modalWindow.js';

//Приклад використання промісів з getBooksData.js
// import { getBookData } from './js/getBooksData.js';
// import { createCategoryString } from './js/getCategoryString.js';

// Змінна яка підтверджує додавання книги до ShoppingList
export let isAddToShoppingList = true;
// по дефолту повинна бути біла тема.
// розрахунок адаптивного розміру шрифта = розмір шрифта * 100 / на максимальний розмір вьюпорта vw
// скрол робити в css, складні скроли можливо в бібліотеці.
// All Categories не ховати, hover/focus - toUpperCaseтекст.
// на support кнопка скролл внизу перевиртається стрілак і йде у верх.
// якщо текст контент порожній пишимо 'N/A'

// const booksInform = new getBookData();
// const body = document.querySelector('body');
// const list = document.createElement('ul');

// body.append(list);
// function renderCategoryList() {
//   let categoryArray = [];
//   booksInform
//     .getPromCategoryList()
//     .then(books => {
//       categoryArray = books.map(book => `<li>${book.list_name}</li>`).join('');
//       //   console.log(books);
//       list.insertAdjacentHTML('beforeend', categoryArray);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }
// renderCategoryList();

// list.addEventListener('click', getString);
// const box = document.createElement('div');
// list.after(box);
// function getString(e) {
//   e.preventDefault();
//   box.innerHTML = ' ';

//   const data = e.target.innerHTML;

//   categoryString = createCategoryString(`${data}`);

//   let categoryArray = [];
//   const booksInform = new getBookData(id, (category = `${categoryString}`));
//   booksInform
//     .getPromCategory()
//     .then(books => {
//       console.log(books);
//       categoryArray = books
//         .map(
//           book => `<div class="book-card">
//               <img src="${book.book_image}" alt="${book.title}" width="330px" height="485px">
//               <h2>${book.title.slice(0, 20)}${book.title.length > 20 ? '...' : ''}</h2>
//               <p>${book.author}</p>
//             </div>`
//         )
//         .join('');
//       box.insertAdjacentHTML('beforeend', categoryArray);
//         console.log(categoryArray);
//         const categoryList = document.querySelector('.book-container');
//         console.log(books);
//         categoryList.innerHTML = `<div class="books_collection">
//             <h1 class="category-title">${books.list_name}</h1>
//             <ul class="books-list">${categoryArray}</ul>
//           </div>`;
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }

// const categoryList = document.querySelector('.categories-list');
// console.log(categoryList.innerHTML);

// const category = categoryList.innerHTML;

// if (category !== '') {
//   const Listen = document.querySelector('#seemore__btn');
//   console.log(Listen);
// }
