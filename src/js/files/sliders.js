import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import '../../scss/base/swiper.scss';

function initSliders() {
  if (document.querySelector('.slider-main__body')) {
    new Swiper('.slider-main__body', {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 32,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      loopAdditionalSlides: 5,
      parallax: true,
      preloadImages: false,
      watchOverflow: true,
      pagination: {
        el: '.controlls-slider-main__dotts',
        clickable: true,
      },
      navigation: {
        prevEl: '.slider-main .slider-arrow_prev',
        nextEl: '.slider-main .slider-arrow_next',
      },
      /*
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      on: {},
    });
  }
  if (document.querySelector('.slider-rooms__body')) {		
    new Swiper('.slider-rooms__body', {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 24,
      speed: 800,
      loop: true,
      loopAdditionalSlides: 5,
      parallax: true,
      preloadImages: false,
      watchOverflow: true,
      pagination: {
        el: '.slider-rooms__dotts',
        clickable: true,
      },
      navigation: {
        prevEl: '.slider-rooms__arrows .slider-arrow_prev',
        nextEl: '.slider-rooms__arrows .slider-arrow_next',
      },
    });
  }
  if (document.querySelector('.slider-tips__body')) {
    new Swiper('.slider-tips__body', {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 32,
      speed: 800,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1.1,
          spaceBetween: 15,
          // autoHeight: true,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
      preloadImages: false,
      watchOverflow: true,
      pagination: {
        el: '.slider-tips__dotts',
        clickable: true,
      },
      navigation: {
        prevEl: '.slider-tips .slider-arrow_prev',
        nextEl: '.slider-tips .slider-arrow_next',
      },
    });
  }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener('load', function (e) {
  initSliders();
  //initSlidersScroll();
});
