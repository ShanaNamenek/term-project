var url = "https://jsonplaceholder.typicode.com/albums/2/photos";

async function fetchWithString() {
try {
    var response = await fetch(url);
    var data = await response.json();
    var htmlString = data.products.reduce(function (prev, product) {
        return (
            prev + 
            <div class = "product-card">
                <img class = "product-img" src = "${product.thumbnail}" />
                <div class = "product-info">
                    <p class = "product-title">${product.title}</p>
                    <p class = "product-cost">${product.price}</p>
                </div>
            </div>
        )
        });
    document.getElementById("home_page_grid_container").innerHTML = htmlString;
    let cards = document.getElementsByClassName('product-card');
    [...cards].forEach(function(ele) {
        ele.addEventListener('click, function(ev){
            console.log(ev);

        }
    }
} catch (error) {
    console.log("error from catch block");
}

document.getElementsByClassName('product-card');

}
fetchWithString();