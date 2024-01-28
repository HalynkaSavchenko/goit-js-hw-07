const form = document.querySelector(".login-form");

function formHandler(event) {
    event.preventDefault();
    if ( form.elements.email.value === "" || form.elements.password.value === "" ) {
        alert("All form fields must be filled in")
    }
    else {
        const data = {
        email: event.target.email.value.trim(),
        password: event.target.password.value.trim()
        };
        console.log(data);
        form.reset();
    }
 }

form.addEventListener("submit", formHandler);

