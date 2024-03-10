
const products = [
    { id: 1, name: "Produto 1", price: 19.99, image: "images/image.ex.png" },
    { id: 2, name: "Produto 2", price: 29.99, image: "images/image.ex.png" },
    { id: 3, name: "Produto 3", price: 39.99, image: "images/image.ex.png" },
    { id: 4, name: "Produto 4", price: 19.99, image: "images/image.ex.png" },
    { id: 5, name: "Produto 5", price: 29.99, image: "images/image.ex.png" },
    { id: 6, name: "Produto 6", price: 39.99, image: "images/image.ex.png" },
    { id: 7, name: "Produto 7", price: 29.99, image: "images/image.ex.png" },
    { id: 8, name: "Produto 8", price: 39.99, image: "images/image.ex.png" },
    { id: 9, name: "Produto 9", price: 39.99, image: "images/image.ex.png" },
    { id: 10, name: "Produto 10", price: 39.99, image: "images/image.ex.png" },
    { id: 11, name: "Produto 11", price: 39.99, image: "images/image.ex.png" },

];


function displayProducts() {
    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement("h2");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = `Preço: R$ ${product.price.toFixed(2)}`;

        const buyButton = document.createElement("a");
        buyButton.href = "index2.html"; 
        buyButton.textContent = "Comprar";
        buyButton.classList.add("buy-button");

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(buyButton);

        productList.appendChild(productCard);
    });
}


window.onload = displayProducts;
