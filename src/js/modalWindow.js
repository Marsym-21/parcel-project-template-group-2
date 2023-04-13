import { getBookData } from './getBooksData.js';
const booksInform = new getBookData(
    (id = '643282b1e85766588626a085')
  );
function renderBookInformation() {
const modalContainer = document.querySelector('.modal-container');
   
    booksInform
      .getPromId()
      .then((data) => {
        
        categoryArray = `
       <div class="modal-close__btn-wrapper">
	    <button type='button' class='modal-close-btn js-modal-close-btn '>
	   <svg class="close"  width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="m8 8 14 14M8 22 22 8" stroke="#000" stroke-width="2" />
   </svg>
	    </button>
	    </div>
        <div class='modal-book__img-container'>
        <img class='modal-book__img' src='${data.book_image}' 
        alt='${data.title}'/>
        </div>
        <div class='modal-book__description'>
        <h2 class="modal-book__title">${data.title}</h2>
        <p class ="modal-book__author">${data.author}</p>
        <p class ="modal-book__about">${data.description}</p>
        </div>
       <div class = 'modal-book__stores'>
       <div class="modal-book__amazon">${data.amazon_product_url}</div>
       <div class ="modal-book__second"></div>

       <div class ="modal-book__third"></div>
       </div>
        `;
        // console.log(categoryArray);
        // console.log(modalContainer);
        modalContainer.innerHTML = categoryArray;
        console.log(modalContainer);
      })
      .catch(error => {
        console.log(error);
      });
  }
  renderBookInformation()