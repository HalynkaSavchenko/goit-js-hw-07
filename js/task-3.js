const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function inputHandler(event) {
    const name = input.value.trim();
    if (name === "") {
        output.textContent = "Anonymous";
    }
    else {
        output.textContent = name
    }
};

input.addEventListener("input", inputHandler);