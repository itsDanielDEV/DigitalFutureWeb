// Añadir categorias al home
const categories = [
  "Smartphones",
  "Computers",
  "Laptops",
  "Accessories",
  "Gaming",
  "Software",
  "Audio & Sound",
];

// añadir productos
const products = [
  {
    id: 1,
    category: "smartphones",
    name: "Xiaomi 12 Pro",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus tempora, ducimus voluptatibus earum beatae, repellat iure eveniet cum aspernatur eos ipsam vel culpa? Molestias minima in temporibus, placeat fugiat est.",
    price: "$1000",
    imgURL: "https://i.blogs.es/f1c528/pro/450_1000.jpeg",
  },
  {
    id: 2,
    category: "smartphones",
    name: "Samsung Galaxy A23",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus tempora, ducimus voluptatibus earum beatae, repellat iure eveniet cum aspernatur eos ipsam vel culpa? Molestias minima in temporibus, placeat fugiat est.",
    price: "$300",
    imgURL:
      "https://i.blogs.es/b03839/010_galaxy_a23_5g_light_blue_front/450_1000.webp",
  },
  {
    id: 3,
    category: "laptops",
    name: "HP Envy 15",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus tempora, ducimus voluptatibus earum beatae, repellat iure eveniet cum aspernatur eos ipsam vel culpa? Molestias minima in temporibus, placeat fugiat est.",
    price: "$1500",
    imgURL: "https://i.blogs.es/aec9a1/hp-envy-15-oled-portada-3/450_1000.jpg",
  },
  {
    id: 4,
    category: "accessories",
    name: "Transparent Case",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus tempora, ducimus voluptatibus earum beatae, repellat iure eveniet cum aspernatur eos ipsam vel culpa? Molestias minima in temporibus, placeat fugiat est.",
    price: "$10.00",
    imgURL:
      "https://i.blogs.es/449080/funda-transparente-iphone-12/450_1000.webp",
  },
  {
    id: 5,
    category: "accessories",
    name: "Stylish Case",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus tempora, ducimus voluptatibus earum beatae, repellat iure eveniet cum aspernatur eos ipsam vel culpa? Molestias minima in temporibus, placeat fugiat est.",
    price: "$15",
    imgURL:
      "https://us.123rf.com/450wm/yuragolub/yuragolub1912/yuragolub191200192/136014435-fundas-de-tel%C3%A9fonos-m%C3%B3viles-decoradas-con-cuentas-y-pedrer%C3%ADa.jpg",
  },
  {
    id: 6,
    category: "computers",
    name: "PC Gamer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus tempora, ducimus voluptatibus earum beatae, repellat iure eveniet cum aspernatur eos ipsam vel culpa? Molestias minima in temporibus, placeat fugiat est.",
    price: "$5000",
    imgURL: "https://i.ytimg.com/vi/dBW1PipPNac/maxresdefault.jpg",
  },
];

export { categories, products };
