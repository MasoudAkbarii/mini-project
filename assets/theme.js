const html = document.documentElement;
const btn = document.getElementById("toggle-dark");

btn.addEventListener("click", () => {
  html.classList.toggle("dark");
});
