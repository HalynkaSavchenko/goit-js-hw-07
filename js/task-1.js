const categoryList = document.querySelectorAll(".item")
console.log(`Number of categories: ${categoryList.length}`);
categoryList.forEach((category) => {
    console.log(`Category: ${category.querySelector("h2").textContent}`);
    console.log(`Elements: ${category.querySelectorAll("li").length}`);
})