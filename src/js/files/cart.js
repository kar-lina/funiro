export function addToCart(productButton, productId) {
  if (!productButton.classList.contains('_hold')) {
    productButton.classList.add('_hold');
    productButton.classList.add('fly');

    const cart = document.querySelector('.cart-header__icon');
    const product = document.querySelector(`[data-pi="${productId}"`);
    const productImage = product.querySelector('.item-product__image');

    const productImageFly = productImage.cloneNode(true);
    const productImageFlyWidth = productImage.offsetWidth
    const productImageFlyHeight = productImage.offsetHeight
    const productImageFlyTop = productImage.getBoundingClientRect().top
    const productImageFlyLeft = productImage.getBoundingClientRect().left
    productImageFly.setAttribute('class', '_flyimage ibg')
    productImageFly.style.cssText = `
    left: ${productImageFlyLeft}px;
    top: ${productImageFlyTop}px;
    width: ${productImageFlyWidth}px;
    height: ${productImageFlyHeight}px;
    `;
        console.log('productImageFly', productImageFly);
        console.log('productImage', productImage);

  }
}
