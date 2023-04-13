import './js/toggle-theme';
//Приклад використання промісів з getBooksData.js
import { getBookData } from './js/getBooksData.js';
import { createCategoryString } from './js/getCategoryString.js';

// Змінна яка підтверджує додавання книги до ShoppingList
export let isAddToShoppingList = true;
// по дефолту повинна бути біла тема.
// розрахунок адаптивного розміру шрифта = розмір шрифта * 100 / на максимальний розмір вьюпорта vw
// скрол робити в css, складні скроли можливо в бібліотеці.
// All Categories не ховати, hover/focus - toUpperCaseтекст.
// на support кнопка скролл внизу перевиртається стрілак і йде у верх.
// якщо текст контент порожній пишимо 'N/A'

const booksInform = new getBookData(
  (id = '643282b1e85766588626a085'),
  (category = `${createCategoryString('Combined Print and E-Book Fiction')}`)
);

function renderCategoryList() {
  const body = document.querySelector('body');
  const list = document.createElement('ul');
  body.append(list);
  // let categoryArray = [];
  booksInform
    .getPromCategory()
    .then(books => {
      // categoryArray = books.map(book => `<li>${book.list_name}</li>`).join('');
      console.log(books);
      // list.insertAdjacentHTML('beforeend', categoryArray);
    })
    .catch(error => {
      console.log(error);
    });
}
renderCategoryList();
