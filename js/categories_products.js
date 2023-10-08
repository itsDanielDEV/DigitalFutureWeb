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
    amount: 5,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus tempora, ducimus voluptatibus earum beatae, repellat iure eveniet cum aspernatur eos ipsam vel culpa? Molestias minima in temporibus, placeat fugiat est.",
    price: "$1000",
    imgURL: "https://i.blogs.es/f1c528/pro/450_1000.jpeg",
  },
  {
    id: 2,
    category: "smartphones",
    name: "Samsung Galaxy A23",
    amount: 15,
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
    amount: 10,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus tempora, ducimus voluptatibus earum beatae, repellat iure eveniet cum aspernatur eos ipsam vel culpa? Molestias minima in temporibus, placeat fugiat est.",
    price: "$1500",
    imgURL: "https://i.blogs.es/aec9a1/hp-envy-15-oled-portada-3/450_1000.jpg",
  },
  {
    id: 4,
    category: "accessories",
    name: "Transparent Case",
    amount: 50,
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
    amount: 35,
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
    amount: 4,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus tempora, ducimus voluptatibus earum beatae, repellat iure eveniet cum aspernatur eos ipsam vel culpa? Molestias minima in temporibus, placeat fugiat est.",
    price: "$5000",
    imgURL: "https://i.ytimg.com/vi/dBW1PipPNac/maxresdefault.jpg",
  },
  {
    id: 7,
    category: "smartphones",
    name: "Nothing Phone 1",
    amount: 50,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus tempora, ducimus voluptatibus earum beatae, repellat iure eveniet cum aspernatur eos ipsam vel culpa? Molestias minima in temporibus, placeat fugiat est.",
    price: "$700",
    imgURL: "https://i.blogs.es/64f399/img_0381/450_1000.jpg",
  },
  {
    id: 8,
    category: "smartphones",
    name: "Motorola Edge 30 Ultra 256gb 5g",
    amount: 100,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus tempora, ducimus voluptatibus earum beatae, repellat iure eveniet cum aspernatur eos ipsam vel culpa? Molestias minima in temporibus, placeat fugiat est.",
    price: "$300",
    imgURL:
      "https://http2.mlstatic.com/D_NQ_NP_786462-MCO71744685641_092023-O.webp",
  },
  {
    id: 9,
    category: "software",
    name: "Spotify Card $15.000COP",
    amount: 500,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus tempora, ducimus voluptatibus earum beatae, repellat iure eveniet cum aspernatur eos ipsam vel culpa? Molestias minima in temporibus, placeat fugiat est.",
    price: "$300",
    imgURL:
      "https://productosvirtuales.sitioventas.com/wp-content/uploads/2021/12/Tarjeta-gift-Spotify-Premium-1-Mes-Region-Colombia-disponible.jpg",
  },
  {
    id: 10,
    category: "computers",
    name: "Torre Cpu Gamer ",
    amount: 15,
    description: "Ryzen 7 5700g Vega 8 1tb 16gb Led 22 Pc",
    price: "$1500",
    imgURL: "https://i.blogs.es/37561e/superpc-1/450_1000.jpeg",
  },
];

export { categories, products };
