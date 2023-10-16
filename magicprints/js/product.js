/* ========== Products Slider =========== */
const swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 70,
  pagination: {
    el: ".custom-pagination",
    clickable: true,
  },
  breakpoints: {
    567: {
      slidesPerView: 2,
    },
    996: {
      slidesPerView: 3,
    },
  },
});

/* ========== Fetch the Products =========== */

const getProducts = async () => {
  try {
    const results = await fetch("./data/products.json"); // Adjust the path to your JSON file
    const data = await results.json();
    const products = data.products;
    return products;
  } catch (err) {
    console.log(err);
  }
};

const ProductsWrapper = document.getElementById("products");

window.addEventListener("DOMContentLoaded", async function () {
  let products = await getProducts();
  // Display all products by default
  displayProductItems(products);
  loadData();
});

/* ========== Display Products =========== */
const displayProductItems = (items) => {
  let displayProduct = items.map(
    (product) => `
      <div class="swiper-slide">
        <div class="product">
          <div class="top d-flex">
            <img src=${product.url} alt="" />
          </div>
          <div class="bottom">
            <div class="product-details">
              <h4>${product.title}</h4>
              <p><strong>Color:</strong> ${product.color}</p>
              <p><strong>Size:</strong> ${product.size}</p>
              <p><strong>Fabric:</strong> ${product.fabric}</p>
            </div>
            <div class="d-flex">
              <a href="#requirement_form" class="price cart-btn">Order Now</a>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  );

  displayProduct = displayProduct.join("");
  ProductsWrapper.innerHTML = displayProduct;
};

/* ========== Filter Products =========== */
const filters = [...document.querySelectorAll(".filters div")];

filters[0].classList.add("active"); // Add the 'active' class to the first filter by default

filters.forEach((filter) => {
  filter.addEventListener("click", async (e) => {
    const id = e.target.getAttribute("data-filter");
    const target = e.target;
    const products = await getProducts();
    filters.forEach((btn) => {
      btn.classList.remove("active");
    });
    target.classList.add("active");

    let menuCategory = products.filter((product) => {
      // Filter by category
      if (product.category === id) {
        return product;
      }
    });

    displayProductItems(menuCategory);
    swiper.update();
  });
});

const categoriesProducts = document.querySelector(".categories .products");
const loadmore = document.querySelector(".loadmore");

let currentIndex = 0;
let maxResult = 9; // Number of products to load at a time

async function loadData() {
  let products = await getProducts();
  if (currentIndex >= products.length) {
    // If we've loaded all the products, disable the button and show a message
    // loadmore.disabled = true;
    // loadmore.innerText = "No More Products";
    loadmore.style.display ="none";
    return;
  }

  for (let i = 0; i < maxResult && i + currentIndex < products.length; i++) {
    const product = products[i + currentIndex];
    categoriesProducts.insertAdjacentHTML(
      "beforeend",
      `<div class="product">
        <div class="top d-flex">
          <img src=${product.url} alt="" />
        </div>
        <div class="bottom">
          <div class="product-details">
            <h4>${product.title}</h4>
            <p><strong>Color:</strong> ${product.color}</p>
            <p><strong>Size:</strong> ${product.size}</p>
            <p><strong>Fabric:</strong> ${product.fabric}</p>
          </div>
          <div class="d-flex">
          <a href="#requirement_form" class="price cart-btn">Order Now</a>
            <div class="rating">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
            </div>
          </div>
        </div>
      </div>`
    );
  }

  currentIndex += maxResult;
  if (currentIndex >= products.length) {
    loadmore.style.display = "none"; // Hide the "Load More" button if there are no more products to load
  }
  
}

loadmore.addEventListener("click", loadData);


// function scrollToDiv(divId) {
//   const element = document.getElementById(divId);
//   element.scrollIntoView({ behavior: "smooth" });
// }