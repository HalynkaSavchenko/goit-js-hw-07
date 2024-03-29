const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];


const gallery = document.querySelector("ul.gallery");
gallery.style.display = "flex";
gallery.style.listStyleType = "none"

const markup = images.map(image => {
  return `<li class="list-item"><img src="${image.url}" alt="${image.alt}"></li>`;
}).join("");

gallery.insertAdjacentHTML("beforeend", markup);


// Додаткове оформлення галереї ||ПЕРЕНЕСЕНО В CSS||
// const li = document.querySelectorAll(".list-item");
// const img = document.querySelectorAll("img");
// img.forEach(image => {
//   image.style.width = "800px";
//   image.style.height = "500px";
// });
// li.forEach(item => {
//   item.style.margin = "10px";
// });



// Альтернативне рішення  ||ВИПРАВЛЕНЕ||
// const gallery = document.querySelector("ul.gallery");
// gallery.style.display = "flex";
// gallery.style.listStyleType = "none"

// images.forEach(image => {
//   const li = document.createElement("li");
//   li.classList.add("list-item");
//   const img = document.createElement("img");
//   img.setAttribute("src", image.url);
//   img.setAttribute("alt", image.alt);
//   li.append(img);
//   gallery.append(li)
// })
