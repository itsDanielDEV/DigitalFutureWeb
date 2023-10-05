// Home - Add Item to Cart

const d = document,
  w = window,
  $cartBody = d.querySelector(".cart-body");

function itemsToCart() {
  d.addEventListener("click", (e) => {
    if (e.target.matches("#btn-addCart")) {
      // Referencia al data id del item seleccionado
      const $dataIdNumber = e.target.closest(".col").getAttribute("data-id");

      // Si encuentras el id del elemento seleccionado dentro del carrito haz lo siguiente
      if ($cartBody.querySelector(`[data-id="${$dataIdNumber}"]`)) {
        return;
      }

      const $itemCart = d.createElement("article"),
        $img = d.createElement("img"),
        $itemCartInfo = d.createElement("section"),
        $itemCartTitle = d.createElement("p"),
        $itemCartPrice = d.createElement("p"),
        $itemCartActions = d.createElement("section"),
        $btnadd = d.createElement("button"),
        $numItems = d.createElement("span"),
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

      $btnadd.classList.add("btn", "btn-danger");
      $btnadd.textContent = "+";
      $btndecrease.classList.add("btn", "btn-success");
      $btndecrease.textContent = "-";

      $numItems.classList.add("m-2");
      $numItems.textContent = "1";

      $itemCartActions.appendChild($btnadd);
      $itemCartActions.appendChild($numItems);
      $itemCartActions.appendChild($btndecrease);

      $itemCartInfo.appendChild($itemCartTitle);
      $itemCartInfo.appendChild($itemCartPrice);

      $itemCart.appendChild($img);
      $itemCart.appendChild($itemCartInfo);
      $itemCart.appendChild($itemCartActions);

      $cartBody.appendChild($itemCart);
    }
  });
}

export { itemsToCart };