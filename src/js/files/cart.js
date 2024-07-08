export function addToCart(productButton, productId) {
  if (!productButton.classList.contains('_hold')) {
    productButton.classList.add('_hold');
    productButton.classList.add('fly');

    const cart = document.querySelector('.cart-header__icon');
    const product = document.querySelector(`[data-pi="${productId}"`);
    const productImage = product.querySelector('.item-product__image');

    const productImageFly = productImage.cloneNode(true);
    const productImageFlyWidth = productImage.offsetWidth;
    const productImageFlyHeight = productImage.offsetHeight;
    const productImageFlyTop = productImage.getBoundingClientRect().top;
    const productImageFlyLeft = productImage.getBoundingClientRect().left;
    productImageFly.setAttribute('class', '_flyimage ibg');
    productImageFly.style.cssText = `
      left: ${productImageFlyLeft}px;
      top: ${productImageFlyTop}px;
      width: ${productImageFlyWidth}px;
      height: ${productImageFlyHeight}px;`;
    document.body.append(productImageFly);

    const cartFlyTop = cart.getBoundingClientRect().top;
    const cartImageFlyLeft = cart.getBoundingClientRect().left;

    productImageFly.style.cssText = `
      left: ${cartImageFlyLeft}px;
      top: ${cartFlyTop}px;
      height: 0px;
      opacity: 0;
      width: 0px;`;

    productImageFly.addEventListener('transitionend', function () {
      if (productButton.classList.contains('_fly')) {
        productButton.classList.remove('_fly');
        updateCart(productButton, productId);
        productButton.remove();
      }
    });
  }
}
function  updateCart(productButton, productId, productAdd = true) {
  const cart = document.querySelector('.cart-header')
  const cartIcon = document.querySelector('.cart-header__icon')
  const cartList = document.querySelector('.cart-header__icon')
  const cartProduct = document.querySelector(`[data-cart-pi="${productId}"`);
  const cartQuantity = cartIcon.querySelector('.cart-list')

}