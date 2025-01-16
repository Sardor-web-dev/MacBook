const colorWhite = document.getElementById("color-white");
const colorGray = document.getElementById("color-gray");
const PriceText = document.querySelector('price_text')
const productColor = document.getElementById("product-color");
const productPrice = document.getElementById("product-price");
const productImage = document.getElementById("product-image");
const datas = document.querySelectorAll('.data')

colorWhite.addEventListener("click", () => {
    productColor.textContent = "White";
    productImage.src = "./images/image2.png";
    productPrice.textContent = '$1,999'
    colorWhite.classList.remove('disactive');
    colorWhite.classList.add("active");
    colorGray.classList.remove("active");
    colorGray.classList.add('disactive');
});
colorGray.addEventListener("click", () => {
    productColor.textContent = "Gray";
    productImage.src = "./images/image.png";
    productPrice.textContent = '$2,599'
    colorGray.classList.remove('disactive');
    colorGray.classList.add("active");
    colorWhite.classList.remove("active");
    colorWhite.classList.add('disactive');
});


datas.forEach(data => {
    data.addEventListener('click', () => {
        const price = data.getAttribute('data-price')
        productPrice.textContent = `$${price}`

        datas.forEach(data => data.classList.remove('storage-active'))
        data.classList.add('storage-active')
    })
})