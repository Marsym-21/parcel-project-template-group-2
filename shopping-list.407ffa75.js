!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){l.default(e,t,o[t])}))}return e};var i,l=(i=r("hKHmD"))&&i.__esModule?i:{default:i};var a,s=document.getElementById("theme-checkbox"),u={body:document.querySelector("body"),header:document.querySelector(".header_btn__shopping")};console.log(a),"dark"===localStorage.getItem("theme")&&(s.checked=!0);var d,m,f,p=new(0,r("hUz67").getBookData)(id="643282b1e85766588626a085");d=document.querySelector(".categories"),m=document.querySelector(".categories-list"),f=[],p.getPromTopBooks().then((function(t){var o=document.createElement("h1");d.prepend(o),o.textContent="Best Sellers Books",f=t.slice(0,4).map((function(e){var t=e.books.map((function(e){return'<li class="books-list__item" data-id="'.concat(e._id,'">\n            <div class="item-wrap">\n            <div class = "item-img__wrap">\n             <img class="item-img"\n                src="').concat(e.book_image,'" \n                alt="').concat("book cover photo",'" \n                width ="330px" \n                height ="485px" />\n             </div>\n                <div class="item-title__wrap">\n                  <h3 class="item__name">').concat(e.title,'</h3>\n                  <p class="item__author">').concat(e.author,"</p>\n                </div>\n            </div>\n          </li>")})).join("");return'<div class="section__category">\n       <li class="categories-list__item">\n           <h2 class="category">'.concat(e.list_name,'</h2>\n           <ul class="books-list">').concat(t,'</ul>\n           <button type="button" id="seemore__btn">see more</button>\n          </li>\n   </div>')})),categoryHtml=f.join(""),m.insertAdjacentHTML("beforeend",categoryHtml),function(t){a=e(c)({},u,t),console.log(a)}({newElem:document.querySelector("#seemore__btn")})})).catch((function(e){console.log(e)}))}();
//# sourceMappingURL=shopping-list.407ffa75.js.map