export async function showMoreProducts(button) {
  if (!button.classList.contains('_hold')) {
    button.classList.add('_hold');
    const file = 'json/products.json';
    let response = await fetch(file, {
      method: 'GET',
    });
    if (response.ok) {
      let result = await response.json();
      if (result?.products) loadProducts(result.products);
        button.classList.remove('_hold');
      // button.remove();
    } else {
      alert('Error');
    }
  }
}

function loadProducts(data) {
  const productItems = document.querySelector('.products__items');
  data.forEach((element) => {
    const productId = element.id;
    const productUrl = element.url;
    const productImage = element.image;
    const productTitle = element.title;
    const productText = element.text;
    const productPrice = element.price;
    const productOldPrice = element.priceOld;
    const productShareUrl = element.shareUrk;
    const productLikeUrl = element.likeUrl;
    const productLabels = element.labels;

    let productLabelsTemplate = productLabels?  productLabels.map((label) => `<div class="item-product__label item-product__label_${label.type}">${label.value}</div>`).join(' '): '';

    let productTemplate = `<article data-pi="${productId}" class="products__item item-product">
        <div class="item-product__labels">
          ${productLabelsTemplate}
        </div>
        <a href="" class="item-product__image ibg">
          <img class="ibg" src="img/products/${productImage}" alt="${productTitle}" />
        </a>
        <div class="item-product__body">
          <div class="item-product__content">
            <h5 class="item-product__title">${productTitle}</h5>
            <div class="item-product__text">${productText}</div>
          </div>
          <div class="item-product__prices">
            <div class="item-product_price">${productPrice}</div>
            ${productOldPrice ? `<div class="item-product_price item-product_price_old">${productOldPrice}</div>` : ''}
          </div>
          <div class="item-product__actions actions-product">
            <div class="actions-product__body">
              <a href="${productUrl}" class="actions-product__button button button_white">Add to cart</a>
              <a href="${productShareUrl}" class="actions-product__link _icon-share">Share</a>
              <a href="${productLikeUrl}" class="actions-product__link _icon-favorite">Like</a>
            </div>
          </div>
        </div>
      </article>`;
    
      productItems.insertAdjacentHTML('beforeend', productTemplate)
  });
}
