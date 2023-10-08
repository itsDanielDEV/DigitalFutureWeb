// Home - Add Item to Cart
import { products } from "./categories_products.js";

const copyProducts = JSON.parse(JSON.stringify(products));

const d = document,
  w = window,
  $cartBody = d.querySelector(".cart-body");

function addNumTextarea(textarea) {
  if (typeof textarea.textContent !== "string" || textarea.textContent === "")
    textarea.textContent = 1;
  textarea.textContent = parseInt(textarea.textContent) + 1;
}

function decreaseNumTextarea(textarea) {
  if (typeof textarea.textContent !== "string" || textarea.textContent === "")
    textarea.textContent = 1;
  if (textarea.textContent - 1 === 0) {
    removeFromCart(textarea);
  }
  if (textarea.textContent > 0)
    textarea.textContent = parseInt(textarea.textContent) - 1;
}

function removeFromCart(textarea) {
  textarea.closest(".item-cart").remove();
  updateSubtotalPrice();
}

function updatePrice(itemId, textarea, itemPriceCart) {
  // let price = itemPrice.textContent.slice([1]);
  let price = products.filter((product) => product.id === Number(itemId));
  price = price[0].price.slice([1]);
  itemPriceCart.textContent =
    "$" + Number(price) * Number(textarea.textContent);
}

function updateSubtotalPrice() {
  let $offcanvasCart = d.querySelector("#offcanvasCart"),
    $subtotalPrice = $offcanvasCart.querySelector("#subtotal-price"),
    $listPrices = $offcanvasCart.querySelectorAll(".item-cart-price");

  let total = 0;
  if ($listPrices.length === 0) $subtotalPrice.textContent = total;

  $listPrices.forEach((el) => {
    total += Number(el.textContent.slice(1));

    $subtotalPrice.textContent = total;
  });

  //
  updateAmounts();
}

function updateAmounts() {
  //

  let $offcanvasCart = d.querySelector("#offcanvasCart");
  $offcanvasCart.querySelectorAll(".item-cart").forEach((el) => {
    // console.log("id: " + el.getAttribute("data-id"));
    // console.log("value: " + typeof el.querySelector(".num-items").value);
    const dataIndex = Number(el.getAttribute("data-id")) - 1;
    const numItems = Number(el.querySelector(".num-items").value);

    products[dataIndex].amount = copyProducts[dataIndex].amount - numItems;

    // console.log(
    //   `copy id:[${dataIndex}]: ` +
    //     copyProducts[dataIndex].amount +
    //     ` original id:[${dataIndex}]: ` +
    //     products[dataIndex].amount
    // );
  });
}

function itemsToCart() {
  const storedCartData = localStorage.getItem("cartsItemsStored");
  const cartContainer = document.querySelector(".cart-body"); // Supongamos que tienes un contenedor donde deseas agregar los elementos del carrito

  if (storedCartData) {
    const itemsArray = JSON.parse(storedCartData);

    itemsArray.forEach((itemHTML) => {
      // console.log("itemHTML : " + itemHTML);
      var range = document.createRange();

      // Crear un fragmento de documento a partir de la cadena HTML
      var fragment = range.createContextualFragment(itemHTML);

      // Acceder al primer elemento hijo del fragmento
      var elemento = fragment.firstChild;

      // Ahora 'elemento' es un elemento HTML que puedes manipular como desees
      // console.log(elemento);

      // Agregar 'newItem' al contenedor deseado en el documento
      cartContainer.appendChild(elemento);
    });
    updateSubtotalPrice();
  }

  d.addEventListener("click", (e) => {
    const $itemCartStorage = d.querySelectorAll(".item-cart");

    const $ArrayCartStorage = Array.from($itemCartStorage).map(
      (element) => element.outerHTML
    );
    console.log($ArrayCartStorage);

    localStorage.setItem("cartsItemsStored", JSON.stringify($ArrayCartStorage));

    localStorage.setItem("productsArray", JSON.stringify(products));

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
        updateSubtotalPrice();

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
      $numItems.textContent = "1";
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
        const $itemCart = e.target.closest(".item-cart");
        const $itemPriceCart = $itemCart.querySelector("item-cart-price");
        updatePrice(
          $itemCart.getAttribute("data-id"),
          e.target,
          $itemCartPrice
        );
        updateSubtotalPrice();
        if (e.target.value === "0") removeFromCart($numItems);
        if (!Number.isInteger(Number(e.target.value)))
          e.target.value = Math.round(e.target.value);
      });
      updateSubtotalPrice();
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
      updateSubtotalPrice();
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
      updateSubtotalPrice();
    }
  });
}

export { itemsToCart };
