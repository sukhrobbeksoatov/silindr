const elHeightInput = document.querySelector("[data-height]");
const elRadiusInput = document.querySelector("[data-radius]");
const elP = document.querySelector("[data-p]");

let height = "";
let PI = "";
let radius = "";
let s = "";
let v = "";
elHeightInput.addEventListener("input", () => {
  height = +elHeightInput.value;
  console.log(height);
});

elRadiusInput.addEventListener("input", () => {
  radius = +elRadiusInput.value;
  PI = 3.14;
  s = radius * PI;
  v = s * height;

  if (v === 0) {
    elP.innerHTML = "";
  } else {
    elP.innerHTML = `Hajm: ${Math.trunc(v)}sm<sup>3</sup>`;
  }
});
