!function(){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},e={},a=o.parcelRequired7c6;null==a&&((a=function(o){if(o in n)return n[o].exports;if(o in e){var a=e[o];delete e[o];var l={id:o,exports:{}};return n[o]=l,a.call(l.exports,l,l.exports),l.exports}var s=new Error("Cannot find module '"+o+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(o,n){e[o]=n},o.parcelRequired7c6=a),a("iE7OH").register(JSON.parse('{"11HD9":"index.d25b0f37.js","410VS":"icons.3fcd0366.svg"}'));var l,s=new(0,a("hUz67").getBookData)(id="643282b2e85766588626a112");l=a("aNJCr").getBundleURL("11HD9")+a("iE7OH").resolve("410VS");var t,c=new URL(l);t=document.querySelector(".modal-container"),s.getPromId().then((function(o){function n(n){for(var e=o.buy_links,a=0;a<e.length;a+=1){if(e[a].name==="".concat(n))return e[a].url;e[a].name,"".concat(n)}}console.log(n("Amazon")),console.log(n("Bookshop")),console.log(n("Apple Books")),categoryArray='\n       <div class="modal-close__btn-wrapper">\n      <button type=\'button\' class=\'modal-close-btn js-modal-close-btn \'>\n     <svg class="close" fill="none" width="30" height="30">\n          <use href="'.concat(c,"#icon-x-close\"></use>\n</svg>\n    \n       <path d=\"m8 8 14 14M8 22 22 8\" stroke=\"#000\" stroke-width=\"2\" />\n   </svg>\n      </button>\n      </div>\n      <div class ='modal-book'>\n      <div class='modal-book__img-container'>\n        <img class='modal-book__img' src='").concat(checkValue(o.book_image),"' \n        alt='").concat(checkValue(o.title),"'/>\n        </div>\n        <div class='modal-book__description'>\n        <h2 class=\"modal-book__title\">").concat(checkValue(o.title),'</h2>\n        <p class ="modal-book__author">').concat(checkValue(o.author),'</p>\n        <p class ="modal-book__about">\n      \n        "').concat(checkValue(o.description),'"</p>\n        \n       <div class = \'modal-book__stores\'>\n\n      <div class="modal-book__amazon">\n       <a class="amazon__link link"\n       href="').concat(n("Amazon"),'"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="amazon icon"\n   >\n  \n   <svg class="book" fill="none" width="60" height="60">\n          <use href="').concat(c,'#icon-amazon-ar21"></use>\n</svg>\n\n   </a>\n       </div>\n       <div class ="modal-book__applebook">\n       <a class="applebook__link link"\n       href="').concat(n("Apple Books"),'"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="Apple Book icon"\n   >\n       <svg class="book"  width="30" height="30" fill="none">\n       <use href="').concat(c,'#icon-apple-ibooks"></use> \n       </svg>\n   </div>\n\n\n       <div class ="modal-book__bookshop">\n       <a class="bookshop__link link"\n       href="').concat(n("Bookshop"),'"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="Bookshop icon"\n   >\n       <svg class="book"  width="40" height="40">\n              <use href="').concat(c,'#icon-14008711"></use>\n       </svg>\n       </div>\n       </div>\n       </div>\n       </div>\n       <div  class="modal-book__add__wrapper">  \n       <button type="button" class="modal-book__button btn__add" data-id="').concat(o.id,'">Add to shopping list</button>  \n         \n   </div>  \n        '),t.innerHTML=categoryArray})).catch((function(o){console.log(o)}))}();
//# sourceMappingURL=index.d25b0f37.js.map