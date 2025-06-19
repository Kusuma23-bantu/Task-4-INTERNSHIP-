let products = [
  { name: "Smartphone", category: "electronics", price: 300 },
  { name: "Laptop", category: "electronics", price: 900 },
  { name: "Book A", category: "books", price: 20 },
  { name: "Book B", category: "books", price: 15 }
];

function displayProducts(list) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  list.forEach(p => {
    grid.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>Category: ${p.category}</p>
        <p>₹${p.price}</p>
      </div>
    `;
  });
}

function filterProducts(category) {
  const filtered = category === "all" ? products : products.filter(p => p.category === category);
  displayProducts(filtered);
}

function sortProducts(type) {
  let sorted = [...products];
  if (type === "priceLow") sorted.sort((a, b) => a.price - b.price);
  if (type === "priceHigh") sorted.sort((a, b) => b.price - a.price);
  displayProducts(sorted);
}

window.onload = () => displayProducts(products);
