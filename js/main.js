// Home

const d = document,
  w = window,
  $parentCanvasDkp = d.getElementById("parent-canvas-dkp"),
  $offcanvasDkp = d.querySelector(".ctm-offcanvas-dkp"),
  $parentCanvasMobile = d.getElementById("parent-canvas-mobile"),
  $offcanvasMobile = d.querySelector(".offcanvas-mobile");

const $cartBody = d.querySelector(".cart-body");

d.addEventListener("click", (e) => {
  // Sidebar
  if (e.target.matches(".categories-item")) {
    const $offcanvasBackdrop = d.querySelector(".offcanvas-backdrop");

    d.body.removeAttribute("style");

    if ($offcanvasDkp.classList.contains("show")) {
      $offcanvasDkp.classList.remove("show");
      $parentCanvasDkp.removeChild($offcanvasBackdrop);
    } else if ($offcanvasMobile.classList.contains("show")) {
      $offcanvasMobile.classList.remove("show");
      $parentCanvasMobile.removeChild($offcanvasBackdrop);
    }
  }

  // Cart
  if (e.target.matches("#btn-addCart")) {
    // e.target.closest(".col").querySelector(".card-body #item-name").textContent;
    // e.target.closest(".col").querySelector(".card-body #item-price").textContent;
    // e.target.closest(".col").querySelector(".card-img-top").src;
    // const $img = d.createElement("img");
    // $img.src = e.target.closest(".col").querySelector(".card-img-top").src;
    // d.body.appendChild($img);

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
