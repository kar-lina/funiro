
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import "../../scss/base/swiper.scss";


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
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	initSliders();
	//initSlidersScroll();
});