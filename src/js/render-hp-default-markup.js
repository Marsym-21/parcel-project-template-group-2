import { getBookData } from './getBooksData.js';

// import { getString } from './render-hp-all-categories.js';

const booksInform = new getBookData((id = '643282b1e85766588626a085'));

const firstSpanMainTitle = document.createElement('span');
firstSpanMainTitle.textContent = 'Best Sellers';
firstSpanMainTitle.classList.add('main-title__first-part');
const secondSpanMainTitle = document.createElement('span');
secondSpanMainTitle.textContent = ' Books';
secondSpanMainTitle.classList.add('main-title__second-part');

const imgAttributeAlt = 'book cover photo';

function renderCategoryList() {
  const sectionCategory = document.querySelector('.categories');
  const categoryList = document.querySelector('.categories-list'); // Get reference to the ul element using its id
  let categoryArray = [];
  booksInform
    .getPromTopBooks()
    .then(books => {
      const mainTitleName = document.createElement('h1');
      mainTitleName.classList.add('default__main-title');
      console.log(mainTitleName);
      sectionCategory.prepend(mainTitleName);
      mainTitleName.prepend(firstSpanMainTitle, secondSpanMainTitle);

// задат значенню для обрізання змінну ...
      

let currentRenderWidth = 375;

addEventListener('resize', event => {
  if (
    (window.innerWidth > 767 && currentRenderWidth < 768) ||
    (window.innerWidth > 1439 && currentRenderWidth < 1440) ||
    (window.innerWidth < 1440 && currentRenderWidth > 1439) ||
    (window.innerWidth < 768 && currentRenderWidth > 767)
  ) {
    location.reload();
  }
});
      
currentRenderWidth = window.innerWidth;
let sliseQuantity = 1;
if (currentRenderWidth < 768) {
  sliseQuantity = 1;
} else if (currentRenderWidth > 767 && currentRenderWidth < 1440) {
  sliseQuantity = 3;
} else {
  sliseQuantity = 5;
      }
      console.log(sliseQuantity);

      categoryArray = books.slice(0, 4).map(book => {
        const booksArray = book.books.slice(0, sliseQuantity)
          .map(
            data =>
              `<li class="books-list__item" data-id="${data._id}">

            <div class="item-img__wrap">
              <img class="item-img"
                src="${data.book_image}" 
                alt="${imgAttributeAlt}" 
                width ="${data.book_image_width}"
                height ="${data.book_image_height}"
              />
              <div class="item__overlay">
                <p class="item__overlay-text">quick view</p>
              </div>
            </div>
            
            <div class="item-title__wrap">
              <h3 class="item__name">${data.title.slice(0, 19)}${data.title.length > 19 ? '...' : ''}</h3>
              <p class="item__author">${data.author}</p>
            </div>
                        
          </li>`
          )
          .join('');
        return `<li class="categories-list__item">
                <h2 class="category">${book.list_name}</h2>
                <ul class="books-list">${booksArray}</ul>                   
                <div class="btn-see-more__wrap">
                 <button class="btn-see-more" type="button">see more</button>
                </div>                 
                </li>`;
      });

      const categoryHtml = categoryArray.join(''); // Join the array of HTML strings into a single string
      categoryList.insertAdjacentHTML('beforeend', categoryHtml); // Insert the HTML code into the ul element
    })
    .catch(error => {
      console.log(error);
    });
}

renderCategoryList();

// function resetContent() {
//   sectionCategory.innerHTML => getString(e);
// }

// const button = document.querySelector('.btn-see-more');
// button.addEventListener('click', getString);
