import { supportData } from './supportData';
import Swiper from 'swiper';
import '../../node_modules/swiper/swiper.scss';

function addSupportItemsToList(arr) {
  return arr.map(
    item =>
      `<li class="support_item swiper-slide"><a class="support-link" target="_blank" href="${
        item.url
      }"><span class="support-number">0${arr.indexOf(item) + 1}</span>
    <img class="support-logo" alt="${item.title}" src="${item.img}"></a></li>`
  );
}

// console.log(addSupportItemsToList(supportItemsArr));

function renderSupportList() {
  const elSupportList = document.querySelector('.support-list');
  elSupportList.insertAdjacentHTML(
    'beforeend',
    addSupportItemsToList(supportData).join(' ')
  );
}
renderSupportList();

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  slidesPerView: 4,
  // spaceBetween: 10,
  // loop: true,
  // navigation: true,
  // slidesPerGroup: 4,
  // oneWayMovement: true,
  rewind: true,
  breakpoints: {
    768: {
      slidesPerView: 6,
      slidesPerGroup: 1,
      // spaceBetween: 20,
      // loop: true,
      rewind: true,
    },
  },
});

// console.log(swiper);

const supportButtonNext = document.querySelector('.support-button-next');
supportButtonNext.addEventListener('click', () => {
  swiper.slideNext();
  // swiper.changeDirection('vertical', true);
  return;
});

// const supportButtonPrev = document.querySelector('.support-button-prev');
// supportButtonPrev.addEventListener('click', () => {
//   swiper.slidePrev();
//   return;
// });
swiper.on('reachEnd', () => {
  // supportButtonNext.classList.add('is-hidden');
  // supportButtonPrev.classList.remove('is-hidden');
  supportButtonNext.style.transform = 'rotate(180deg)';
  // console.log('end');
});
swiper.on('reachBeginning', () => {
  // console.log('begin');
  // supportButtonNext.classList.remove('is-hidden');
  // supportButtonPrev.classList.add('is-hidden');
  supportButtonNext.style.transform = 'none';
});
