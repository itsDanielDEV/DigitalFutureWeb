// Home

const d = document,
  w = window,
  $parentCanvasDkp = d.getElementById("parent-canvas-dkp"),
  $offcanvasDkp = d.querySelector(".ctm-offcanvas-dkp"),
  $parentCanvasMobile = d.getElementById("parent-canvas-mobile"),
  $offcanvasMobile = d.querySelector(".offcanvas-mobile");

d.addEventListener("click", (e) => {
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
});
