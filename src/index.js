import { getBookData } from './js/getBooksData.js';

const booksInform = new getBookData();

function renderCategoryList() {
  const body = document.querySelector('body');
  const list = document.createElement('ul');
  body.append(list);
  let categoryArray = [];
  booksInform
    .getPromTopBooks()
    .then(books => {
      categoryArray = books.map(book => `<li>${book.list_name}</li>`).join('');
      console.log(categoryArray);
      list.insertAdjacentHTML('beforeend', categoryArray);
    })
    .catch(error => {
      console.log(error);
    });
}
renderCategoryList();
