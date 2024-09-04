let products = {
  data: [
    {
      productName: "Blue star",
      category: "Keychains",
      price: "10",
      image: "image/keychain1.jpg",
    },
    {
      productName: "Jellyfish",
      category: "Keychains",
      price: "10",
      image: "image/keychain2.jpg",
    },
    {
      productName: "Totoro",
      category: "Keychains",
      price: "10",
      image: "image/keychain3.jpg",
    },
    {
      productName: "Couple cats",
      category: "Keychains",
      price: "10",
      image: "image/keychain4.jpg",
    },
    {
      productName: "Phoccaco",
      category: "Keychains",
      price: "10",
      image: "image/keychain8.jpg",
    },
    {
      productName: "Green",
      category: "Stickers",
      price: "5",
      image: "image/sticker4.jpg",
    },
    {
      productName: "Ghibli",
      category: "Stickers",
      price: "5",
      image: "image/sticker7.jpg",
    },
    {
      productName: "Jujutsu Kaisen",
      category: "Stickers",
      price: "5",
      image: "image/sticker8.jpg",
    },
    {
      productName: "Spiderman",
      category: "Stickers",
      price: "5",
      image: "image/sticker9.jpg",
    },
    {
      productName: "Black",
      category: "Stickers",
      price: "5",
      image: "image/sticker10.jpg",
    },
    {
      productName: "Haku & Chihiro",
      category: "Bracelets",
      price: "15",
      image: "image/bracelet1.jpg",
    },
    {
      productName: "Sophie",
      category: "Bracelets",
      price: "15",
      image: "image/bracelet2.jpg",
    },
    {
      productName: "Sophie & Howl",
      category: "Bracelets",
      price: "15",
      image: "image/bracelet4.jpg",
    },
    {
      productName: "Soot",
      category: "Bracelets",
      price: "15",
      image: "image/bracelet6.jpg",
    },
    {
      productName: "Totoro",
      category: "Bracelets",
      price: "15",
      image: "image/bracelet7.jpg",
    },
    {
      productName: "Flower",
      category: "Pins",
      price: "10",
      image: "image/pin1.jpg",
    },
    {
      productName: "Spider",
      category: "Pins",
      price: "5",
      image: "image/pin3.jpg",
    },
    {
      productName: "redeye",
      category: "Pins",
      price: "5",
      image: "image/pin4.jpg",
    },
    {
      productName: "Red",
      category: "Pins",
      price: "10",
      image: "image/pin6.jpg",
    },
    {
      productName: "Green",
      category: "Pins",
      price: "10",
      image: "image/pin7.jpg",
    },
  ],
};

for (let i of products.data) {
  // Create Card
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");

  // Container
  let container = document.createElement("div");
  container.classList.add("container");

  card.innerHTML = `
    <div class="image-container"><img src="${i.image}"></div>
    <div><i class='bx bx-heart' id="heart-icon"></i></div>
    <div class="container">
      <div>
        <h5 class="product-name">${i.productName.toUpperCase()}</h5>
        <h6>$ ${i.price}</h6>
      </div>
      <button class="cart-btn">Add to Cart</button>
    </div>
    `;

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

// Filter products by category
function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");

  buttons.forEach((button) => {
    if (value.trim().toUpperCase() === button.innerText.trim().toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // Select all cards
  let elements = document.querySelectorAll(".card");

  // Convert the filter value to lowercase for comparison
  let filterValue = value.trim().toLowerCase();

  // Loop through all cards
  elements.forEach((element) => {
    // Get the category class of the element and convert it to lowercase
    let categoryClass = element.classList[1].toLowerCase();

    if (filterValue === "all" || categoryClass === filterValue) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  });
}

// Search button click
document.getElementById("search").addEventListener("click", () => {
  // Initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  
  // Loop through all elements
  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

// Initially display all products
window.onload = () => {
  filterProduct("all");
};

// Heart button click
let heartBtns = document.querySelectorAll("#heart-icon");
heartBtns.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("bxs-heart");
  });
});
