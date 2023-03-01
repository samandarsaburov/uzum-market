// scrol 
window.addEventListener("scroll", function(){
    var scroll = document.querySelector(".scroltop");
    scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
// scrol end 

const elTopList = findElement("#products__top");
const elTopTemplate = findElement("#product-template")

console.log(products);

products.slice(0, 20).forEach((products) => {
    const newProduct = elTopTemplate.content.cloneNode(true);
    // console.log(products);

    const elTitle = findElement("#title", newProduct);
    const elPrice = findElement("#price", newProduct);
    const elRating = findElement("#rating", newProduct);
    const elImg = findElement("img", newProduct);

    elTitle.textContent = products.name;
    elPrice.textContent = products.price + "$";
    elRating.textContent = products.rating + "rating";
    elImg.src = products.image;



    elTopList.appendChild(newProduct);
})

//---------------------- language----------------------



const ellangSelect = findElement("#language-select")

let lang = localStorage.getItem("lang");

ellangSelect.value = lang

if (lang == 'uz') {
    document.title = "internet do'kon";
} else if (lang == 'en') {
    document.title = "E-commerce";
} else if (lang == 'ru') {
    document.title = "интернет магазин";
}


ellangSelect.addEventListener("change", () => {

    const value = ellangSelect.value;

    localStorage.setItem("lang", value);

    lang = value

    if (lang == 'uz') {
        document.title = "internet do'kon";
    } else if (lang == 'en') {
        document.title = "E-commerce";
    } else if (lang == 'ru') {
        document.title = "интернет магазин";
    }
})




