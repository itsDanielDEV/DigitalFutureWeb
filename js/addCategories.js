import { categories, products } from "./categories_products.js";

const d = document,
  w = window;

function idFormatter(word) {
  let id;
  let isArray = false;
  if (Array.isArray(word)) {
    word = word.join("-");
    isArray = true;
  }

  id = word.toLowerCase();
  id = id.trim();
  id = id.replace("&", "and");
  id = id.replaceAll(" ", "");

  if ((isArray = true)) id = id.split("-");
  return id;
}

function countCategoriesInObjectList(categoriesList, objectList) {
  const result = {};
  let i = 0;

  for (let category of categoriesList) {
    const count = objectList.filter((obj) => obj.category === category).length;
    result[category] = count;
    i++;
  }

  return result;
}

const $shopCards = d.getElementById("shop-cards");

function addSections() {
  categories.forEach((el) => {
    // Imprime cada categoria
    const $categoryTitle = d.createElement("h2");

    $categoryTitle.id = idFormatter(el);
    $categoryTitle.textContent = el;

    $shopCards.appendChild($categoryTitle);

    // Imprime para tarjeta debajo de cada categoria
    const $row = d.createElement("section");

    $row.classList.add(
      "row",
      "gx-4",
      "gx-lg-5",
      "row-cols-2",
      "row-cols-md-3",
      "row-cols-xl-4",
      "justify-content-center"
    );

    // Si hay menos de 1 producto se imprime un mensaje
    if (
      countCategoriesInObjectList(idFormatter(categories), products)[
        idFormatter(el)[0]
      ] < 1
    ) {
      const $message = d.createElement("h3");
      $message.textContent = "No hay articulos por mostrar";

      $row.appendChild($message);

      // Si hay al menos un producto se imprime el producto
    } else {
      const $templateCard = d.getElementById("template-card");

      for (let product of products) {
        if (product.category === idFormatter(el)[0]) {
          const $newCard = d.importNode($templateCard.content, true);
          $newCard
            .querySelector(".col")
            .setAttribute("data-id", `${product.id}`);
          // Asigna el nombre a la card
          $newCard.querySelector("#item-name").textContent = product.name;
          // Asigna la descripcion a la card
          $newCard.querySelector("#item-desc").textContent =
            product.description;
          // Asigna el precio a la card
          $newCard.querySelector("#item-price").textContent = product.price;
          // Asigna la URL a la card
          $newCard.querySelector(".card-img-top").src = product.imgURL;
          $row.appendChild($newCard);
        }
      }
    }

    $shopCards.appendChild($row);
  });
}

export { addSections };
