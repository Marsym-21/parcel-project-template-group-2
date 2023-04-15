import axios from "axios";
import Notiflix from "notiflix";

import { getBookData } from './getBooksData.js';
import { createCategoryString } from './getCategoryString';

const btnMoreElem = document.getElementById('seemore__btn');
console.log(btnMoreElem);

const booksInform = new getBookData((id = '643282b1e85766588626a085'));

let page = 1;
let limit = 5;

const totalPage = 100 / limit;

// btnMoreElem.addEventListener('click', () => {
//     if (page > totalPage) {
//         return toggleAlertPopup();
//     }
//     fetchBooks()
//     .then(())
// });

// function renderBookList(books) {
//     const markup = books
//       .map((book) => {
//         return `<li class="books-list__item" data-id="${data._id}">
//         <div class="item-wrap">
//         <div class = "item-img__wrap">
//          <img class="item-img"
//             src="${data.book_image}" 
//             // alt="${imgAttributeAlt}" 
//             width ="330px" 
//             height ="485px" />
//          </div>
//             <div class="item-title__wrap">
//               <h3 class="item__name">${data.title}</h3>
//               <p class="item__author">${data.author}</p>
//             </div>
//         </div>
//       </li>`;
//       })
//       .join("");
//     blabla.innerHTML = markup;
//   }

