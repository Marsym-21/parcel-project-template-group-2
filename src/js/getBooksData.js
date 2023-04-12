const axios = require('axios').default;
export class getBookData {
  constructor(URL, categoryList, topBooks) {
    this.URL = 'https://books-backend.p.goit.global';
    this.categoryList = '/books/category-list';
    this.topBooks = '/books/top-books';
  }

  async getPromTopBooks() {
    try {
      const response = await axios.get(`${this.URL}${this.topBooks}`);
      const books = await response.data;
      return books;
    } catch (error) {
      console.log(error);
    }
  }

  async getPromCategoryList() {
    try {
      const response = await axios.get(`${this.URL}${this.categoryList}`);
      const list = await response.data;
      return list;
    } catch (error) {
      console.log(error);
    }
  }
}
