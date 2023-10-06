// Home - Add Item to Cart
import { products } from "./categories_products.js";

const d = document,
  w = window,
  $cartBody = d.querySelector(".cart-body");

function addNumTextarea(textarea) {
  if (typeof textarea.value !== "string" || textarea.value === "")
    textarea.value = 1;
  textarea.value = parseInt(textarea.value) + 1;
}

function decreaseNumTextarea(textarea) {
  if (typeof textarea.value !== "string" || textarea.value === "")
    textarea.value = 1;
  if (textarea.value - 1 === 0) {
    removeFromCart(textarea);
  }
  if (textarea.value > 0) textarea.value = parseInt(textarea.value) - 1;
}

function removeFromCart(textarea) {
  textarea.closest(".item-cart").remove();
}

function updatePrice(itemId, textarea, itemPriceCart) {
  // let price = itemPrice.textContent.slice([1]);
  let price = products.filter((product) => product.id === Number(itemId));
  price = price[0].price.slice([1]);
  itemPriceCart.textContent = "$" + Number(price) * Number(textarea.value);
}

function itemsToCart() {
  d.addEventListener("click", (e) => {
    if (e.target.matches("#btn-addCart")) {
      // Referencia al data id del item seleccionado
      const $dataIdNumber = e.target.closest(".col").getAttribute("data-id");
      //referencia al textarea del elemento seleccionado dentro del cart

      // Si encuentras el id del elemento seleccionado dentro del carrito haz lo siguiente
      if ($cartBody.querySelector(`[data-id="${$dataIdNumber}"]`)) {
        let $idItemCart = e.target.closest(".col").getAttribute("data-id");
        let $valueTextAreaSelected = $cartBody
          .querySelector(`[data-id="${$dataIdNumber}"]`)
          .querySelector(".num-items");
        let $priceItemInCart = $cartBody
          .querySelector(`[data-id="${$dataIdNumber}"]`)
          .querySelector(".item-cart-price");

        addNumTextarea($valueTextAreaSelected);
        updatePrice($idItemCart, $valueTextAreaSelected, $priceItemInCart);
        return;
      }

      const $itemCart = d.createElement("article"),
        $img = d.createElement("img"),
        $itemCartInfo = d.createElement("section"),
        $itemCartTitle = d.createElement("p"),
        $itemCartPrice = d.createElement("p"),
        $itemCartActions = d.createElement("section"),
        $btnadd = d.createElement("button"),
        $numItems = d.createElement("textarea"),
        $btndecrease = d.createElement("button");

      $itemCart.classList.add("item-cart");
      $itemCart.setAttribute(
        "data-id",
        `${e.target.closest(".col").getAttribute("data-id")}`
      );

      $img.classList.add("item-cart-img");
      $img.src = e.target.closest(".col").querySelector(".card-img-top").src;
      $img.alt = e.target
        .closest(".col")
        .querySelector(".card-body #item-name").textContent;

      $itemCartInfo.classList.add("item-cart-info");

      $itemCartTitle.classList.add("item-cart-title");
      $itemCartTitle.textContent = e.target
        .closest(".col")
        .querySelector(".card-body #item-name").textContent;

      $itemCartPrice.classList.add("item-cart-price");
      $itemCartPrice.textContent = e.target
        .closest(".col")
        .querySelector(".card-body #item-price").textContent;

      $itemCartActions.classList.add("item-cart-actions");

      $btnadd.classList.add("btn", "btn-success", "btnAdd");
      $btnadd.textContent = "+";
      $btndecrease.classList.add("btn", "btn-danger", "btnDecrease");
      $btndecrease.textContent = "-";

      $numItems.classList.add("num-items", "m-2");
      $numItems.value = "1";
      $numItems.cols = "1";
      $numItems.rows = "1";

      $itemCartActions.appendChild($btndecrease);
      $itemCartActions.appendChild($numItems);
      $itemCartActions.appendChild($btnadd);

      $itemCartInfo.appendChild($itemCartTitle);
      $itemCartInfo.appendChild($itemCartPrice);

      $itemCart.appendChild($img);
      $itemCart.appendChild($itemCartInfo);
      $itemCart.appendChild($itemCartActions);

      $cartBody.appendChild($itemCart);

      // if ($numItems.value === 0) removeFromCart($numItems);
      $numItems.addEventListener("keyup", (e) => {
        if (e.target.value === "0") removeFromCart($numItems);
        if (!Number.isInteger(Number(e.target.value)))
          e.target.value = Math.round(e.target.value);
      });
    }

    //Sumar productos en el cart
    if (e.target.matches(".btnAdd")) {
      let $idItemCart = e.target.closest("[data-id]").getAttribute("data-id");
      addNumTextarea(e.target.previousSibling);
      updatePrice(
        $idItemCart,
        e.target.previousSibling,
        e.target.closest(".item-cart").querySelector(".item-cart-price")
      );
    }

    //Restar productos en el cart
    if (e.target.matches(".btnDecrease")) {
      let $idItemCart = e.target.closest("[data-id]").getAttribute("data-id");
      decreaseNumTextarea(e.target.nextSibling);
      updatePrice(
        $idItemCart,
        e.target.nextSibling,
        e.target.closest(".item-cart").querySelector(".item-cart-price")
      );
    }
  });
}

export { itemsToCart };
