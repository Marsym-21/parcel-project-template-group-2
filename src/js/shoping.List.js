import { getBookData } from './getBooksData'; 
// const logoPath = new URL('../images/SVG/PNG/dump.png', import.meta.url); 
const shopingListEl = document.querySelector('.shopingList');

const key = ['643282b1e85766588626a080', '643282b1e85766588626a0ba', '643282b1e85766588626a0ba', '643282b1e85766588626a0dc', '643282b2e85766588626a0fc', '643282b2e85766588626a118'];
 
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
                
                </a></li>  
              <li>  
<a href="${links('Apple Books')}" rel="noopener noreferrer" class="amazon">  
  
   </a>  
              </li>  
              <li>  
<a href="${links('Bookshop')}" rel="noopener noreferrer" class="amazon">  
    
   </a>  
              </li>  
            </ul>  
          <div class="remove"> 
             <img src="./images/dump.svg" alt="">
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









    
