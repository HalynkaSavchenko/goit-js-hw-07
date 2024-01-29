// ВИПРАВЛЕНО

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("#controls input")
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes= document.querySelector("#boxes");

function createBoxes(amount) {
  if (amount > 0 && amount <= 100) {
    boxes.innerHTML = "";
    for (let i = 0; i < amount ; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
  }
  input.value = "";
};

function destroyBoxes() {
  boxes.innerHTML = ""

};

btnCreate.addEventListener("click", function () {
  createBoxes(input.value)
});

btnDestroy.addEventListener("click", destroyBoxes);

