const clamp = document.querySelector(".sub_text-Btn");
const contentText = document.querySelector(".sub_text-content");

clamp.addEventListener("click", () => {
  clamp.classList.toggle("clicked");
  contentText.classList.toggle("clamp");
});
