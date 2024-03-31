// const яка знаходить кнопку
const createDivBtn = document.querySelector(".createDiv");

// тут ств. константу яка знаходить input

const constInput = document.querySelector("#count-input");

// код нище створює div in "boxes"
createDivBtn.addEventListener("click", () => {
  //отримали значення з інпут
  const count = parseInt(constInput.value);

  // ПЕРЕВІРКА ЗНАЧЕННЯ (COUNT)
  if (isNaN(count) || count < 1 || count > 100) {
    alert("Введіть число від 1 до 100");
    return;
  }

  // ств новий div та додали в div.boxes
  for (let i = 0; i < count; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.height = `${30 + i * 10}px`;

    document.querySelector("#boxes").appendChild(newDiv);

    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }

    // очищення поля вводу після створення дів
    constInput.value = "";

    createDivBtn.addEventListener("click", () => {
      newDiv.remove();
    });

    const destroy = document.querySelector(".destroyBtn");
    destroy.addEventListener("click", () => {
      newDiv.remove();
    });
  }
});
