const inputInfo = document.querySelector("#name-input");

const newInfo = document.querySelector("#name-output");

inputInfo.addEventListener("input", () => {
  const trimmedName = inputInfo.value.trim();
  newInfo.textContent = trimmedName || "Anonymous";
});
