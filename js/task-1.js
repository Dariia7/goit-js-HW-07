const ulElements = document.querySelectorAll(".item");

console.log(`Number of categories: ${ulElements.length}`);

ulElements.forEach((el) => {
  console.log(`Category: ${el.querySelector("h2").textContent}`);
  console.log(`Elements: ${el.querySelector("ul").children.length}`);
});
