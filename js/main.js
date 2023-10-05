import { sidebarFix } from "./sidebarfix.js";
import { addSections } from "./addCategories.js";
import { itemsToCart } from "./addItemToCart.js";

const d = document,
  w = window;

d.addEventListener("DOMContentLoaded", (e) => {
  sidebarFix();
  addSections();
  itemsToCart();
});
