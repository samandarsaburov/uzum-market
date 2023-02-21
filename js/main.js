const elTopList =  findElement("#products__top");
const elTopTemplate = findElement("#product-template")

console.log(products);

products.slice(0, 20).forEach((products) => {
    const newProduct = elTopTemplate.content.cloneNode(true);
    // console.log(products);

    const elTitle = findElement("#title",newProduct);
    const elPrice = findElement("#price",newProduct);
    const elRating = findElement("#rating",newProduct);
    const elImg = findElement("img",newProduct);

    elTitle.textContent = products.name;
    elPrice.textContent = products.price + "$";
    elRating.textContent =   products.rating + "rating";
    elImg.src = products.image;


    elTopList.appendChild(newProduct);
}) 