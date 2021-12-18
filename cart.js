document.querySelector(".hamburger").addEventListener("click", myFunction);

function myFunction() {
    document.querySelector(".hamburger").classList.toggle("change")

    document.querySelector(".hamnames").classList.toggle("category")

}

var cartlist = [
    {
        imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/95f3b6936ed7415c8672ad0800cbc532_9366/Superstar_Shoes_White_H00182_01_standard.jpg",
        price: "9999.00",
        name: "Superstar Shoes",
        type: "Men originals",
        new: "new"
    },
    {
        "imgURL": "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/dca753b347ae4aa2b92bad4400ed1e89_9366/Face_Cover_-_Not_For_Medical_Use_Black_HC4701_21_model.jpg",
        "price": "999.00",
        "name": "Face Cover- Not For Medical Use",
        "type": "Men originals",
        "new": "3-pack"
    },
    {
        "imgURL": "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/dca753b347ae4aa2b92bad4400ed1e89_9366/HC4701_21_model.jpg",
        "price": "999.00",
        "name": "Face Cover- Not For Medical Use",
        "type": "Original"
    }
]
var wishlist = JSON.parse(localStorage.getItem("wishlistdb")) || []
var len = wishlist.length;
// var cartlist = JSON.parse(localStorage.getItem("cartlistdb")) || []
var le = cartlist.length;
displaycart(cartlist)
document.querySelector("#wishlistLen").textContent = len;
document.querySelector("#cartLen").textContent = le;

var checkout_container = document.querySelector("#CHECKOUT_SECTION");
console.log(checkout_container);
function displaycart(arr) {

    arr.map(function (element, index) {
        var maindiv = document.createElement("div");
        maindiv.setAttribute("id", "prod");
        var div_img = document.createElement("div");
        div_img.setAttribute("id", "fir");
        var img = document.createElement("img");
        img.setAttribute("src", element.imgURL);
        var div_cont_main = document.createElement("div");
        div_cont_main.setAttribute("id", "sec")
        var div_cont = document.createElement("div");
        div_cont.setAttribute("id", "sec1");
        var p1 = document.createElement("p");
        p1.textContent = element.name;
        var p2 = document.createElement("p");
        p2.textContent = element.type;
        var div_prices = document.createElement("div");
        div_prices.setAttribute("id", "sec2");
        var span = document.createElement("span");
        span.innerHTML = '<i class="fas fa-times"></i>'
        // span.addEventListener("click", function () {
        //     deleteRow(index)
        // })
        var p3 = document.createElement("p");
        p3.textContent = "Rs. " + element.price;


        div_img.append(img);
        div_cont_main.append(div_cont, div_prices);
        div_cont.append(p1, p2);
        div_prices.append(p3, span);
        maindiv.append(div_img, div_cont_main);

        document.querySelector("#mycarddata").append(maindiv);



    })

}

// function deleteRow(index) {
//     console.log("delete");
//     wishlist.splice(index, 1)
//     localStorage.setItem("cartlistdb", JSON.stringify(cartlist));

// }