// import { products } from "./categories_products.js";

// var products = localStorage.getItem("productsArray");
// console.log("objetoObtenido: ", JSON.parse(products));

var productosRecuperados = JSON.parse(localStorage.getItem("productsArray"));
const products = productosRecuperados;

const d = document,
  w = window;

d.addEventListener("DOMContentLoaded", (e) => {
  let totalAmount = 0;
  let totalPrice = 0;
  products.forEach((el) => {
    // Subir todos los productos al body de la tabla inventario
    const $tableBodyInventory = d.querySelector(".table-inventory-body");

    const $tr = d.createElement("tr"),
      $tdName = d.createElement("td"),
      $tdAmount = d.createElement("td"),
      $tdPrice = d.createElement("td"),
      $tdActions = d.createElement("td"),
      $aEdit = d.createElement("a"),
      $aDelete = d.createElement("a");

    $tdActions.classList.add("actions");
    $aEdit.classList.add("btn", "btn-primary", "me-1");
    $aEdit.innerHTML = `
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  class="bi bi-pencil-square"
  viewBox="0 0 16 16"
>
  <path
    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
  />
  <path
    fill-rule="evenodd"
    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
  />
</svg>
    `;
    $aDelete.innerHTML = `
    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                      />
                    </svg>
    `;

    $aDelete.classList.add("btn", "btn-danger");

    $tdName.textContent = el.name;
    $tdAmount.textContent = el.amount;
    $tdPrice.textContent = el.price;

    $tr.appendChild($tdName);
    $tr.appendChild($tdAmount);
    $tr.appendChild($tdPrice);

    $tdActions.appendChild($aEdit);
    $tdActions.appendChild($aDelete);

    $tr.appendChild($tdActions);

    $tableBodyInventory.appendChild($tr);

    totalAmount += el.amount;
    totalPrice += Number(el.price.slice(1));
  });
  // Pie de la tabla inventario - totales
  const $tableFootInventory = d.querySelector(".table-inventory-foot tr");
  const $tdTotalAmount = d.createElement("td"),
    $tdTotalPrice = d.createElement("td"),
    $tdBlank = d.createElement("td");

  $tdTotalAmount.textContent = totalAmount;
  $tdTotalPrice.textContent = `$${totalPrice}`;

  $tableFootInventory.appendChild($tdTotalAmount);
  $tableFootInventory.appendChild($tdTotalPrice);
  $tableFootInventory.appendChild($tdBlank);
});
