function idFormatter(word) {
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
  // let count = 0,
  i = 0;

  for (let category of categoriesList) {
    const count = objectList.filter((obj) => obj.category === category).length;
    result[category] = count;
    i++;
  }

  return result;
}

const d = document,
  w = window;

const $shopCards = d.getElementById("shop-cards");

const categories = [
  "Smartphones",
  "Computers",
  "Laptops",
  "Accessories",
  "Gaming",
  "Software",
  "Audio & Sound",
];

const products = [
  {
    id: 1,
    category: "smartphones",
    name: "Smartphone 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus tempora, ducimus voluptatibus earum beatae, repellat iure eveniet cum aspernatur eos ipsam vel culpa? Molestias minima in temporibus, placeat fugiat est.",
    price: "$50.00",
    imgURL: "https://i.blogs.es/f1c528/pro/450_1000.jpeg",
  },
  {
    id: 2,
    category: "smartphones",
    name: "Smartphone 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus tempora, ducimus voluptatibus earum beatae, repellat iure eveniet cum aspernatur eos ipsam vel culpa? Molestias minima in temporibus, placeat fugiat est.",
    price: "$50.00",
    imgURL:
      "https://i.blogs.es/b03839/010_galaxy_a23_5g_light_blue_front/450_1000.webp",
  },
  {
    id: 3,
    category: "laptops",
    name: "Laptop 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus tempora, ducimus voluptatibus earum beatae, repellat iure eveniet cum aspernatur eos ipsam vel culpa? Molestias minima in temporibus, placeat fugiat est.",
    price: "$50.00",
    imgURL: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  },
  {
    id: 4,
    category: "accessories",
    name: "Accessories 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus tempora, ducimus voluptatibus earum beatae, repellat iure eveniet cum aspernatur eos ipsam vel culpa? Molestias minima in temporibus, placeat fugiat est.",
    price: "$50.00",
    imgURL: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  },
];

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

    for (product of products) {
      if (product.category === idFormatter(el)[0]) {
        const $newCard = d.importNode($templateCard.content, true);

        // Asigna el nombre a la card
        $newCard.querySelector("#item-name").textContent = product.name;
        // Asigna la descripcion a la card
        $newCard.querySelector("#item-desc").textContent = product.description;
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
