import Swiper from 'swiper';
import '../../node_modules/swiper/swiper.scss';

const supportItemsArr = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: null,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: null,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: null,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: null,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: null,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: null,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: null,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: null,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: null,
  },
];

// console.log(document.querySelector('.support-list'));

function addSupportItemsToList(arr) {
  return arr.map(
    item =>
      `<li class="support_item swiper-slide"><a target="_blank" href="${
        item.url
      }">0${arr.indexOf(item) + 1} ${item.title}</a></li>`
  );
}

// console.log(addSupportItemsToList(supportItemsArr));

function renderSupportList() {
  const elSupportList = document.querySelector('.support-list');
  elSupportList.insertAdjacentHTML(
    'beforeend',
    addSupportItemsToList(supportItemsArr).join(' ')
  );
}
renderSupportList();

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  // navigation: true,
  slidesPerGroup: 4,
  oneWayMovement: true,
});

console.log(swiper);

// swiper.slideNext();

const supportButtonNext = document.querySelector('.support-button-next');
supportButtonNext.addEventListener('click', () => {
  swiper.slideNext();
  swiper.changeDirection('vertical', true);
  return;
});

// const supportButtonPrev = document.querySelector('.support-button-prev');
// supportButtonPrev.addEventListener('click', () => {
//   swiper.slidePrev();
//   return;
// });
