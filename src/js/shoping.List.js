import { getBookData } from './getBooksData'; 
const logoPath = new URL('../images/icons.svg', import.meta.url);
const shopingListEl = document.querySelector('.shopingList');

const key = ['643282b2e85766588626a144', '643282b2e85766588626a144', '643282b2e85766588626a144', '643282b2e85766588626a144', '643282b2e85766588626a144', '643282b2e85766588626a144'];
 
stringKey = JSON.stringify(key);

localStorage.setItem('id', stringKey)


const getLocalstorage = localStorage.getItem('id')
parseLokalstorage = JSON.parse(getLocalstorage)



parseLokalstorage.map((id) => {
    
const getBook = new getBookData((id = `${id}`)); 

function renderBook() { 
    
  const renderCard = getBook.getPromId() .then( ({ list_name, author, title, book_image, description, buy_links }) => { 
    function links(sms) { 
          const link = buy_links; 
          for (let i = 0; i < link.length; i += 1) { 
            if (link[i].name === `${sms}`) { 
              return link[i].url; 
            } else if (link[i].name !== `${sms}`) { 
              continue; 
            } 
          } 
        } 
        return `<li class="card-item"> 
          <div class="img-containerandAuthor"> 
            <img class="book-photo" src="${book_image}" alt="#"> 
            <p class="author">${author}</p> 
          </div> 
          <div class="books-title"> 
            <p class="booktitle">${title}</p> 
            <p class="bookCategory">${list_name}</p> 
            <ul class="links">  
              <li><a href="${links( 
                'Amazon' 
              )}" target="_blank" rel="noopener noreferrer" class="amazon">  
                 <svg fill="none" width="60" height="60">
          <use href="${logoPath}#icon-amazon-ar21"></use>
</svg>
                </a></li>  
              <li>  
<a href="${links('Apple Books')}" target="_blank" rel="noopener noreferrer" class="amazon">  
  <svg   width="30" height="30" fill="none">
       <use href="${logoPath}#icon-apple-ibooks"></use> 
       </svg>
   </a>  
              </li>  
              <li>  
<a href="${links('Bookshop')}" target="_blank" rel="noopener noreferrer" class="amazon">  
    <svg   width="40" height="40">
              <use href="${logoPath}#icon-14008711"></use>
       </svg>
   </a>  
              </li>  
            </ul>  
          <div class="removee"> 
           <svg  class="dumb" width="28" height="28">
              <use href="${logoPath}#icon-dump-1"></use>
       </svg>
          </div> 
        </div> 
        <div class="description-text" 
        <p class="description">${description}</p> 
        </div> 
      </li> 
   `; 
      } 
    ); 
  const card = renderCard.then(data => { 
    shopingListEl.insertAdjacentHTML('beforeend', data); 
  }); 
} 
renderBook();
})


    
