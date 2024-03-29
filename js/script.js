//Products
const products = [
    { id: 1, category: "Tops", productType: "Tops", name: "Gael Top", image: "../assets/img/top_1.jpg", price: 68, description: "This is an off-the-shoulder top with a twist front and double-layer fabric for a supportive fit. It’s made with Contour — luxe, ultra-flattering fabric coveted for its smoothing effect and second-skin feel. Nothing more essential." },
    { id: 2, category: "Tops", productType: "Tops", name: "Hailee Top", image: "../assets/img/top_2.jpg", price: 129, description: "This is a ruched crewneck tank. It's made with Sinch Smooth — a body-hugging fabric that forms to your shape for a perfect fit. Seamless construction provides a smooth look and an ultra-comfortable feel." },
    { id: 3, category: "Tops", productType: "Tops", name: "Audrina T-shirt", image: "../assets/img/top_3.jpeg", price: 45, description: "This is a crewneck t-shirt with a slim fit. It’s made with a super fine-ribbed fabric that shapes to the body for a cozy, hug-like feel." },
    { id: 4, category: "Tops", productType: "Jackets", name: "Pearl Jacket", image: "../assets/img/jacket_1.jpg", price: 325, description: "This puffer is constructed with innovative fabric from Japan and contains 100% responsibly sourced goose down." },
    { id: 5, category: "Tops", productType: "Jackets", name: "Ivy Faux Leather Jacket", image: "../assets/img/jacket_2.jpg", price: 199, description: "This is a lined shirt jacket with patch pockets, dropped shoulders and a boxy fit. It’s made with our innovative Vegan Leather that looks and feels like the real thing." },
    { id: 6, category: "Tops", productType: "Sweaters", name: "Melrose Sweater", image: "../assets/img/sweater_1.jpg", price: 128, description: "This is a cropped cable-knit sweater with a relaxed fit, dropped shoulders and fully fashioned construction. It's made with extra-fine merino wool, recycled nylon, and organic cotton yarn that’s naturally warm with a soft feel." },
    { id: 7, category: "Tops", productType: "Sweaters", name: "Ellie Sweater", image: "../assets/img/sweater_2.jpeg", price: 98, description: "This is a relaxed cardigan with dropped shoulders, hand pockets, ribbed trim and fully fashioned construction. It's knit with an extra-fine 100% merino wool yarn coveted for its natural warmth and super soft feel. This version is constructed using a Half Cardigan stitch with vertical ribs for a textural look and feel." },
    { id: 8, category: "Tops", productType: "Sweaters", name: "Lexie Sweater", image: "../assets/img/sweater_3.jpg", price: 165, description: "This is a fully fashioned crewneck sweater with a slim fit. This peachy soft yarn offers the all-season warmth of wool, without the wool. It’s constructed with a Pointelle stitch for a delicate look and airy feel." },
    { id: 9, category: "Dresses", productType: "Dresses", name: "Megan Mini Dress", image: "../assets/img/dress_1.jpg", price: 229, description: "This is a ruffled fit-and-flare dress with adjustable straps and a rosette detail. It's made with a lightweight, semi-sheer fabric with an ethereal drape. This version is made from 100% recycled materials." },
    { id: 10, category: "Dresses", productType: "Dresses", name: "Serena Dress", image: "../assets/img/dress_2.jpg", price: 175, description: "This is a sleeveless pleated maxi dress with a mock neckline and side slits. It’s made with drapey plissé fabric with a pleated texture and matte finish." },
    { id: 11, category: "Dresses", productType: "Dresses", name: "Tara Dress", image: "../assets/img/dress_3.jpg", price: 138, description: "This is a V-neck fit-and-flare dress with a dropped waist, smocked back and adjustable straps. It’s made from lightweight poplin with a smooth, airy feel and a touch of stretch for comfort." },
    { id: 12, category: "Bottoms", productType: "Pants", name: "Lilah Pant", image: "../assets/img/pant_1.jpg", price: 109, description: "These are high-rise wide-leg pants with a flat front, an elastic back waist and a classic fit. They're expertly tailored with Crepette™ — our one-of-a-kind crepe fabric beloved for its subtle texture, breezy drape and the fact that it basically never wrinkles." },
    { id: 13, category: "Bottoms", productType: "Pants", name: "Amanda Pant", image: "../assets/img/pant_2.jpg", price: 128, description: "These are pleated cargo pants with a relaxed fit, cinchable drawcord waistband and side cargo pockets. They're made with Crepette™ — our one-of-a-kind crepe fabric beloved for its subtle texture, breezy drape and the fact that it basically never wrinkles." },
    { id: 14, category: "Bottoms", productType: "Pants", name: "Stevie Faux Leather Pant", image: "../assets/img/pant_3.jpg", price: 152, description: "These are high-rise straight-leg pants with five-pocket styling and a universally flattering fit. They’re made with our innovative Vegan Leather that looks and feels like the real thing. They have an authentic drape and a soft sheen that feels right from day one." },
    { id: 15, category: "Bottoms", productType: "Shorts", name: "Anna Short", image: "../assets/img/short_1.jpeg", price: 89, description: "This is Denim short signature relaxed cut-off. With a premium Italian 100% organic cotton denim ensures they’ll only get better with age. This version comes in a medium-light indigo wash with distressing and a frayed hem." },
    { id: 16, category: "Bottoms", productType: "Shorts", name: "Parker Short", image: "../assets/img/short_2.jpg", price: 119, description: "These are high-waisted pleated shorts with a relaxed fit and darted back waist. They’re made with a softly structured stretch fabric that holds its form while you move easy." },
    { id: 17, category: "Bottoms", productType: "Skirts", name: "Maya Skirt", image: "../assets/img/skirt_1.jpg", price: 128, description: "A favourite literally made for twirling, this is a high-rise midi skirt with an elastic waist and sunburst pleats. It’s made with a lightweight, semi-sheer fabric with an ethereal drape." },
    { id: 18, category: "Bottoms", productType: "Skirts", name: "Polly Mini Skirt", image: "../assets/img/skirt_2.jpg", price: 88, description: "This is an A-line skirt with a darted back waist and a thigh slit. It's cut from smooth, lightly structured fabric made with recycled materials and with a responsibly sourced wood-based fibres produced through a process that reduces impact on forests, biodiversity and water supply." },
];

//PRODUCTS LS
const saveProductsLS = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
}

const getProductsLS = () => {
    return JSON.parse(localStorage.getItem("products")) || [];
}

//CART LS
const saveCartLS = (products) => {
    localStorage.setItem("cart", JSON.stringify(products));
}

const getCartLS = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

//PRODUCT LS
const getIdProductLS = () => {
    return JSON.parse(localStorage.getItem("product")) || 0;
}

const getIdCategoryLS = () => {
    return JSON.parse(localStorage.getItem("category")) || "All";
}

const totalAmountProducts = () => {
    const cart = getCartLS();

    return cart.length;
}

const subtotalCartProducts = () => {
    const cart = getCartLS();

    return cart.reduce((accumulator, item) => accumulator += (item.price * item.quantity), 0);
}

const emptyCart = () => {
    Swal.fire({
        title: "Are you sure you want to empty your bag?",
        text: "All items will be removed",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#78D6C6",
        cancelButtonColor: "#002147",
        confirmButtonText: "Yes, empty it!"
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("cart");
            cartUpload();
            uploadButtonCart();

            Swal.fire({
                title: "Deleted!",
                text: "Your bag is empty",
                icon: "success",
                confirmButtonColor: "#002147"
            });
        }
    });
}

//Detailed product information
const showProduct = (id) => {
    localStorage.setItem("product", JSON.stringify(id));
}

const showProductByCategory = (id) => {
    localStorage.setItem("category", JSON.stringify(id));
}

const findProduct = () => {
    const products = getProductsLS();
    const id = getIdProductLS();
    const product = products.find(item => item.id === id);

    return product;
}

//Cart
const productAddCart = () => {
    Toastify({
        text: "Added to Bag",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right, #78D6C6, #002147)",
            borderRadius: "1rem"
        },
        offset: {
            x: "2rem",
            y: "7rem"
        },
        onClick: function () { }
    }).showToast();

    const product = findProduct();
    const cart = getCartLS();

    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity++;
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    
    saveCartLS(cart);
    uploadButtonCart();
    updatePriceTotal();
}

const deleteProductCart = (id) => {
    Toastify({
        text: "Item Removed",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #78D6C6, #002147)",
            borderRadius: "1rem"
        },
        offset: {
            x: "2rem",
            y: "7rem"
        },
        onClick: function () { }
    }).showToast();

    const cart = getCartLS();
    const productIndex = cart.findIndex(item => item.id === id);

    if (cart[productIndex].quantity > 1) {
        cart[productIndex].quantity--;
        saveCartLS(cart);
        cartUpload();
        uploadButtonCart();
        updatePriceTotal();
    } else {
        const uploadedCart = cart.filter(item => item.id !== id);
        saveCartLS(uploadedCart);
        cartUpload();
        uploadButtonCart();
        updatePriceTotal();
    }
}

function updatePriceTotal() {
    const cart = getCartLS();
    const total = cart.reduce((accumulator, item) => accumulator += (item.price * item.quantity), 0);

    document.getElementById("totalCart").textContent = `$${total}`;
}

const uploadButtonCart = () => {
    document.getElementById("cartNumber").innerHTML = totalAmountProducts();
}

//Function Products
function productsUpload() {
    const products = getProductsLS();
    const category = getIdCategoryLS();
    const filteredProducts = category === 'All' ? products : products.filter(item => item.category === category);
    const productTitleCategory = document.getElementById("productsTitleCategory");

    if (category != 'All') {
        const productCategory = products.find(item => item.category === category);
        productTitleCategory.innerText = productCategory.category;
    } else {
        productTitleCategory.innerText = "Clothing";
    }

    let productContent = "";

    for (const product of filteredProducts) {
        productContent += `<div class="product">
        <a href="product.html" onclick="showProduct(${product.id})" class="text-decoration-none">
        <img class="productImage" src="${product.image}" alt="${product.name}">
        <div class="productDetail">
            <h2 class="productTitle">${product.name}</h2>
            <p class="productPrice">$${product.price}</p>
        </div>
        </a>
        </div>`;
    }

    document.getElementById("productsContainer").innerHTML = productContent;
}

saveProductsLS(products);
productsUpload();
uploadButtonCart();

function submitForm() {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Submitted Form",
        text: "Thank you for contacting us!",
        showConfirmButton: false,
        timer: 3000
    });
}