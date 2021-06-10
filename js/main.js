const burger = document.querySelector('.burger__button-item');
const nav = document.querySelector('.nav');

if (burger) {
  burger.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    burger.classList.toggle('active');
    nav.classList.toggle('nav--burger');
  });
}

const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    preloadImages: false,

    lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: false,
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

let tab = function () {
  let tabNav = document.querySelectorAll('.tabs__nav-item'),
      tabContent = document.querySelectorAll('.tabs__tab'),
      tabName;

  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)
  });
  function selectTabNav () {
    tabNav.forEach(item => {
      item.classList.remove('active');
    });
    this.classList.add('active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach (item => {
      item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
    })
  }
};
tab();