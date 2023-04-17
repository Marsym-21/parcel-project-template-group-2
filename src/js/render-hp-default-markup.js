// import { getBookData } from './getBooksData.js';
import { getObject } from './toggle-theme.js';
// const booksInform = new getBookData((id = '643282b1e85766588626a085'));

// const mainTitle = 'Best Sellers Books';
// const imgAttributeAlt = 'book cover photo'

// function renderCategoryList() {
//   // const body = document.querySelector('body');
//   // const list = document.createElement('ul');
//   // body.append(list);
//   let categoryArray = [];
//   booksInform
//     .getPromTopBooks()
//     .then(books => {
//       // categoryArray = books.map(book => `<li>${book.list_name}</li>`).join('');
//       // console.log(books);
//      categoryArray = books.map(book => {
//        const booksArray = book.books.map(data =>
//          `<h1 class="main-title">${mainTitle}</h1>
//         <ul class="categories-list">
//           <li class="categories-list__item">
//             <h2 class="category">${book.list_name}</h2>
//             <ul class="books-list">
//               <li class="books-list__item" data-id="${data._id}">
//                 <div class="item-wrap">
//                   <img class="item-img"
//                     src="${data.book_image}"
//                     alt="${imgAttributeAlt}"
//                     width ="330px"
//                     height ="485px" />
//                     <div class="item-title__wrap">
//                       <h3 class="item__name">${data.list_name}</h3>
//                       <p class="item__author">${data.author}</p>
//                     </div>
//                 </div>
//               </li>
//             </ul>
//             <button type="button">see more</button>
//           </li>
//         </ul>`
//        ).join('');
//        return booksArray
//       });

//       console.log(books);
//       // list.insertAdjacentHTML('beforeend', categoryArray);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

// renderCategoryList();

// TEST 2 ось JS

import { getBookData } from './getBooksData.js';
const booksInform = new getBookData((id = '643282b1e85766588626a085'));
let mainTitle = 'Best Sellers Books';
const imgAttributeAlt = 'book cover photo';
function renderCategoryList() {
  const sectionCategory = document.querySelector('.categories');
  const categoryList = document.querySelector('.categories-list'); // Get reference to the ul element using its id
  let categoryArray = [];
  booksInform
    .getPromTopBooks()
    .then(books => {
      const mainTitleName = document.createElement('h1');
      sectionCategory.prepend(mainTitleName);
      mainTitleName.textContent = mainTitle;
      categoryArray = books.slice(0, 4).map(book => {
        const booksArray = book.books
          .map(
            data =>
              `<li class="books-list__item" data-id="${data._id}">
            <div class="item-wrap">
            <div class = "item-img__wrap">
             <img class="item-img"
                src="${data.book_image}" 
                alt="${imgAttributeAlt}" 
                width ="330px" 
                height ="485px" />
             </div>
                <div class="item-title__wrap">
                  <h3 class="item__name">${data.title}</h3>
                  <p class="item__author">${data.author}</p>
                </div>
            </div>
          </li>`
          )
          .join('');
        return `<div class="section__category">
       <li class="categories-list__item">
           <h2 class="category">${book.list_name}</h2>
           <ul class="books-list">${booksArray}</ul>
           <button type="button" id="seemore__btn">see more</button>
          </li>
   </div>`;
      });

      categoryHtml = categoryArray.join(''); // Join the array of HTML strings into a single string
      categoryList.insertAdjacentHTML('beforeend', categoryHtml); // Insert the HTML code into the ul element

      getObject();
    })
    .catch(error => {
      console.log(error);
    });
}
renderCategoryList();
