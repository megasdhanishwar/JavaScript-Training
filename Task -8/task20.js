let productsContainer = document.getElementById("products");
let productCount = document.getElementById("productCount");

let searchBox = document.getElementById("searchBox");
let categoryFilter = document.getElementById("categoryFilter");
let priceFilter = document.getElementById("priceFilter");
let searchButton = document.getElementById("searchButton");

let allProducts = [];

// Display Products

function displayProducts(products){

    productsContainer.innerHTML = "";

    productCount.innerHTML = "Total Products : " + products.length;

    if(products.length == 0){
        productsContainer.innerHTML = `<h2 class="noProducts"> No Products Found </h2>`;
        return;
    }

    products.forEach(function(product){

        productsContainer.innerHTML +=
        `
            <div class="card">

                <img src="${product.image}" alt="image">

                <h3>
                    ${
                        product.title.length > 50
                        ? product.title.slice(0,50) + "..."
                        : product.title
                    }
                </h3>

                <p> <strong>Category :</strong> ${product.category} </p>

                <p><strong>Price :</strong> <span class="price">$${product.price}</span></p>
                
                <p> <strong>Rating :</strong> ${product.rating.rate} </p>

                <button class="buyButton"> <strong>Buy Now</strong> </button>

            </div>
        `;
    });
}

// Fetch Products

fetch("https://fakestoreapi.com/products")

.then(function (response) {
    if (!response.ok) {
      document.querySelector(".api").innerHTML = "<h2>Unable to Load Products</h2>";
      return null;
    }

    return response.json();
})

.then(function(products){

    allProducts = products;
    displayProducts(allProducts);
})

.catch(function(error){
    productsContainer.innerHTML = `<h2 class="noProducts"> Unable to Load Products <br><br> Please try again later. </h2>`;
});


// Search & Filter Products

searchButton.addEventListener("click", function(){
    let searchText = searchBox.value.toLowerCase();

    let selectedCategory = categoryFilter.value;

    let selectedPrice = priceFilter.value;

    let filteredProducts = [];

    allProducts.forEach(function(product){
        let isSearchMatch = false;
        let isCategoryMatch = false;
        let isPriceMatch = false;

        // Search by Title

        if(product.title.toLowerCase().includes(searchText)){
            isSearchMatch = true;
        }
        else{
            isSearchMatch = false;
        }

        // Filter by Category

        if(selectedCategory == "all"){
            isCategoryMatch = true;
        }
        else if(product.category == selectedCategory){
            isCategoryMatch = true;
        }
        else{
            isCategoryMatch = false;
        }

        // Filter by Price

        if(selectedPrice == "all"){
            isPriceMatch = true;
        }
        else if(product.price < Number(selectedPrice)){
            isPriceMatch = true;
        }
        else{
            isPriceMatch = false;
        }

        // Final Condition

        if(isSearchMatch && isCategoryMatch && isPriceMatch){
            filteredProducts.push(product);
        }

    });

    displayProducts(filteredProducts);

});