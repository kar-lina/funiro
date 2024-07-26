// import { isMobile } from 'functions.js';

import { isMobile } from './functions.js';

export function galleryScroll() {
  const furniture = document.querySelector('.gallery__body');
  if (furniture && !isMobile.any()) {
    const furnitureItems = document.querySelector('.gallery__items');
    const furnitureColumns = document.querySelectorAll('.gallery__column');

    const speed = furniture.dataset.speed;

    let posX = 0;
    let coordXpercent = 0;

    furniture.addEventListener('mousemove', function (e) {
      //  ширина
      const furnitureWidth = furniture.offsetWidth;
      // ноль посередине
      const coordX = e.pageX - furnitureWidth / 2;

      // получаем проценты
      coordXpercent = (coordX / furnitureWidth) * 200;

      if (!furniture.classList.contains('_init')) {
        requestAnimationFrame(setMouseGalleryStyle);
        furniture.classList.add('_init');
      }
    });

    function setMouseGalleryStyle() {
      let furnitureItemsWidth = 0;
      furnitureColumns.forEach((el) => {
        furnitureItemsWidth += el.offsetWidth;
      });

      //  разница ширин контента  и видимой части
      const furnitureDiffWidth = furnitureItemsWidth - furniture.offsetWidth;

      const distX = Math.floor(coordXpercent - posX);

      posX = posX + distX * speed;
      let position = (furnitureDiffWidth / 200) * posX;

      furnitureItems.style.cssText = `transform: translate3d(${-position}px,0,0);`;

      if (Math.abs(distX) > 0) {
        requestAnimationFrame(setMouseGalleryStyle);
      } else {
        furniture.classList.remove('_init');
      }
    }
  }
}
