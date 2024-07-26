// Підключення функціоналу "Чертоги Фрілансера"
import { addToCart, updateCart } from './cart.js';
import { isMobile, removeClasses } from './functions.js';
import { galleryScroll } from './gallery-scroll.js';
import { headerScroll } from './header-scroll.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';
import { showMoreProducts } from './products.js';

window.onload = function () {
  document.addEventListener('click', documentActions);
  // Делегирование событиий клика
  function documentActions(e) {
    const targetElement = e.target;
    if (window.innerWidth > 768 && isMobile.any()) {
      if (targetElement.classList.contains('menu__arrow')) {
        targetElement.closest('.menu__item').classList.toggle('_hover');
      }
      if (!targetElement?.classList.contains('menu__arrow') && document.querySelectorAll('.menu__item._hover').length > 0) {
        removeClasses(document.querySelectorAll('.menu__item._hover'), '_hover');
      }
    }
    if (targetElement.classList.contains('search-form__icon')) {
      document.querySelector('.search-form').classList.toggle('_active');
    } else if (!targetElement?.closest('.search-form') && document.querySelector('.search-form._active')) {
      document.querySelector('.search-form._active').classList.remove('_active');
    }

    // Show more
    if (targetElement.classList.contains('products__more')) {
      showMoreProducts(targetElement);
      e.preventDefault();
    }

    // Add to cart
    if (targetElement.classList.contains('actions-product__button')) {
      const productId = targetElement.closest('.item-product').dataset.pi;
      e.preventDefault();
      addToCart(targetElement, productId);
    }

    // Open Cart
    if (targetElement.classList.contains('cart-header__icon') || targetElement?.closest('.cart-header__icon')) {
      e.preventDefault();
      if(document.querySelector('.cart-list').children.length > 0) {
      document.querySelector('.cart-header').classList.toggle('_active');
      }
    } else if (!targetElement?.closest('.cart-header') && !targetElement?.classList.contains('actions-product__button')) {
      document.querySelector('.cart-header').classList.remove('_active');
      e.preventDefault();
    }

    // Delete item from cart
    if (targetElement.classList.contains('cart-list__delete')) {
      e.preventDefault();
      const productId = targetElement.closest('.cart-list__item').dataset.cartPi
      updateCart(targetElement, productId, false)
    }
  }

  // Header
  headerScroll();

  //Gallery Scroll
  galleryScroll()
};
