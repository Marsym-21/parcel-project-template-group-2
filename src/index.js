//Приклад використання промісів з getBooksData.js

import { getBookData } from './js/getBooksData.js';

const booksInform = new getBookData((id = '643282b1e85766588626a085'));

function renderCategoryList() {
  const body = document.querySelector('body');
  const list = document.createElement('ul');
  body.append(list);
  let categoryArray = [];
  booksInform
    .getPromCategoryList()
    .then(books => {
      categoryArray = books.map(book => `<li>${book.list_name}</li>`).join('');
      console.log(books);
      list.insertAdjacentHTML('beforeend', categoryArray);
    })
    .catch(error => {
      console.log(error);
    });
}
renderCategoryList();
