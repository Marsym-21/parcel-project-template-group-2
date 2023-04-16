// import supportItemsArr from './supportData';
import Swiper from 'swiper';
import '../../node_modules/swiper/swiper.scss';

// console.log(supportItemsArr);
import save from '../images/support/save.png';
import hope from '../images/support/hope.png';
import united from '../images/support/united.png';
import medical from '../images/support/medical.png';
import sans from '../images/support/sans.png';
import razom from '../images/support/razom.png';
import hunger from '../images/support/hunger.png';
import vision from '../images/support/vision.png';
import prytula from '../images/support/prytula.png';

const supportItemsArr = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: save,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: hope,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: united,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: medical,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: sans,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: razom,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: hunger,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: vision,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: prytula,
  },
];

// console.log(document.querySelector('.support-list'));

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
    addSupportItemsToList(supportItemsArr).join(' ')
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

console.log(swiper);

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
swiper.on('reachEnd', () => {
  // supportButtonNext.classList.add('is-hidden');
  // supportButtonPrev.classList.remove('is-hidden');
  supportButtonNext.style.transform = 'rotate(180deg)';
  console.log('end');
});
swiper.on('reachBeginning', () => {
  console.log('begin');
  // supportButtonNext.classList.remove('is-hidden');
  // supportButtonPrev.classList.add('is-hidden');
  supportButtonNext.style.transform = 'none';
});
