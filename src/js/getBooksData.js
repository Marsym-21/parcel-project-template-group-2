export class detBookData {
  constructor(URL, categoryList, topBooks) {
    this.URL = 'https://books-backend.p.goit.global';
    this.categoryList = '/books/category-list';
    this.topBooks = '/books/top-books';
  }
}

fetch('https://books-backend.p.goit.global/books/category-list')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  });
