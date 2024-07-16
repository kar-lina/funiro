export function addToCart(productButton, productId) {
  if (!productButton.classList.contains('_hold')) {
    productButton.classList.add('_hold');
    productButton.classList.add('_fly');

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

    productImageFly.addEventListener('transitionend', () => {
      if (productButton.classList.contains('_fly')) {
        productButton.classList.remove('_fly');
        updateCart(productButton, productId);
        // productButton.remove();
      }
    });
  }
}
export function updateCart(productButton, productId, productAdd = true) {
  const cart = document.querySelector('.cart-header');
  const cartIcon = cart.querySelector('.cart-header__icon');
  const cartQuantity = cartIcon.querySelector('span');
  const cartList = document.querySelector('.cart-list');
  const cartProduct = document.querySelector(`[data-cart-pi="${productId}"`);

  if (productAdd) {
    if (cartQuantity) {
      cartQuantity.innerHTML = ++cartQuantity.innerHTML;
    } else {
      cartIcon.insertAdjacentHTML('beforeend', '<span>1</span>');
    }
    if (!cartProduct) {
      const product = document.querySelector(`[data-pi="${productId}"`);
      const cartProdutImage = product.querySelector('.item-product__image').innerHTML;
      const cartProdutTitle = product.querySelector('.item-product__title').innerHTML;
      const cartProductContent = `
        <a href="" class="cart-list__img ibg">${cartProdutImage}</a>
        <div class="cart-list__body">
           <a href="" class="cart-list__title">${cartProdutTitle}</a>
           <div class="cart-list__quantity">Quatity: <span>1</span></div>
            <a href="" class="cart-list__delete">Delete</a>
        </div>
        `;
      cartList.insertAdjacentHTML('beforeend', `<li class="cart-list__item" data-cart-pi="${productId}"> ${cartProductContent}</li>`)
    } else {
      const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span')
      cartProductQuantity.innerHTML = ++cartProductQuantity.innerHTML;
    }
    //  После всех действий
    productButton.classList.remove('_hold');
  } else {
    const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span')
    cartProductQuantity.innerHTML = --cartProductQuantity.innerHTML;
    if(!parseInt(cartProductQuantity.innerHTML)) {
      cartProduct.remove()
    }
    const cartQuantityValue = --cartQuantity.innerHTML

    if(cartQuantityValue) {
      cartQuantity.innerHTML = cartQuantityValue;
    } else {
      cartQuantity.remove()
      cart.classList.remove('_active')
    }
  }
}
