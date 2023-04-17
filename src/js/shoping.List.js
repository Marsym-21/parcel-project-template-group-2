import { getBookData } from './getBooksData'; 
const logoPath = new URL('../images/icons.svg', import.meta.url);
const shopingListEl = document.querySelector('.shopingList');

const key = ['643282b2e85766588626a144', '643282b2e85766588626a0f2', '643282b2e85766588626a0f2', '643282b3e85766588626a194', '643282b2e85766588626a144', '643282b2e85766588626a144'];
 
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
        return `
<li class="shoppinglist_item">
    <div class="shoppinglist_img-container">
        <img class="shoppinglist_img" src="${book_image}" alt="" />
        <p class="shoppinglist_authorM">${author}</p>
    </div>
    <div class="shoppinglist_info">
        <h2 class="shoppinglist_title">${title}</h2>
        <p class="shoppinglist_category">
            ${list_name}
        </p>
    </div>
    <ul class="shoppinglistlink_list">
        <li>
            <a href="${links( 
                'Amazon' 
              )}" target="_blank" rel="noopener noreferrer">
                <svg fill="none" width="55" height="60">
                        <use href="${logoPath}#icon-amazon-ar21"></use>
                    </svg>
            </a>
        </li>
        <li>
            <a href="${links('Apple Books')}" target="_blank" rel="noopener noreferrer">
                <svg width="28" height="27" fill="none">
                        <use href="${logoPath}#icon-apple-ibooks"></use>
                    </svg>
            </a>
        </li>
        <li>
            <a href="${links('Bookshop')}" target="_blank" rel="noopener noreferrer">
                <svg width="32" height="32">
                        <use href="${logoPath}#icon-14008711"></use>
                    </svg>
            </a>
        </li>
    </ul>
    <p class="shoppinglist_desc">
        ${description}
    </p>
    <p class="shoppinglist_author">${author}</p>
    <button class="shoppinglist_btn" type="button">
        <svg class="shoppinglist_btn-icon">
            <use href="${logoPath}#icon-dump-1"></use>
        </svg>
    </button>
</li>
   `; 
      } 
    ); 
  const card = renderCard.then(data => { 
    shopingListEl.insertAdjacentHTML('beforeend', data); 
  }); 
} 
  renderBook();
getBook.getPromTopBooks().then(data => {
      console.log(data)
})
})



    console.log('hello')
