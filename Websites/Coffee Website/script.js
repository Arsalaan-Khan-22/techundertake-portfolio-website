
// Investigate commented code and uncommented code

// const cart = [];

// document.addEventListener("DOMContentLoaded", () => {
//     const addToCartButtons = document.querySelectorAll(".add-cart");
//     const cartItemsList = document.getElementById("cart-items");

//     addToCartButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             // const product = button.parentElement;
//             const productName = button.parentElement.previousElementSibling.textContent;
//             const productPrice = button.parentElement.querySelector('.add-cart').previousElementSibling.textContent;
//             const productImage = button.parentElement.parentElement.querySelector(".products-img img").src;

//             addToCart(productName, productPrice, productImage);
//             updateCartDisplay();
//             calculateTotalAmount();
//         });
//     });

//     function addToCart(productName, productPrice, productImage) {
//         // Clean up the productPrice to extract the numeric value
//         const cleanedPrice = parseFloat(productPrice.replace(/\$/g, '').trim());
    
//         const existingItem = cart.find(item => item.name === productName);
    
//         if (existingItem) {
//             existingItem.quantity++;
//         } else {
//             cart.push({ name: productName, price: cleanedPrice, image: productImage, quantity: 1 });
//         }
//     }

//     function updateCartDisplay() {
//         cartItemsList.innerHTML = "";

//         cart.forEach(item => {
//             const cartItem = document.createElement("div");
//             // cartItem.classList.add("cart-item");

//             cartItem.innerHTML = `
//             <div class="cart-products-icons">
//             <i class='bx bx-heart' ></i>
//             <i class='bx bx-share-alt' ></i>
//         </div>
//         <div class="cart-products-img">
//             <img src="${item.image}" alt="products">
//         </div>
//         <h3>${item.name}</h3>
//         <div class="cart-products-buy">
//             <h4>$${item.price}</h4>
//             <span class="cart-arrows">
//                 <i class='bx bxs-left-arrow left-arrow'></i>
//                 <p>${item.quantity}</p>
//                 <i class='bx bxs-right-arrow right-arrow'></i>
//             </span>
//         </div>
//             `;

//             cartItemsList.appendChild(cartItem);

//             // const removeButtons = cartItem.querySelectorAll(".remove-item");
//             // removeButtons.forEach(button => {
//             //     button.addEventListener("click", () => {
//             //         removeCartItem(button.dataset.name);
//             //         updateCartDisplay();
//             //     });
//             // });

//             const decreaseButtons = cartItem.querySelectorAll(".left-arrow");
//             decreaseButtons.forEach(button => {
//                 button.addEventListener("click", () => {
//                     if(item.quantity > 1) {
//                         item.quantity--;
//                         updateCartDisplay();
//                     }
//                 });
//             });

//             const increaseButtons = cartItem.querySelectorAll(".right-arrow");
//             increaseButtons.forEach(button => {
//                 button.addEventListener("click", () => {
//                     item.quantity++;
//                     updateCartDisplay();
//                 });
//             });
//         });
//     }

//     // function removeCartItem(productName) {
//     //     const itemIndex = cart.findIndex(item => item.name === productName);
//     //     if (itemIndex !== -1) {
//     //         cart.splice(itemIndex, 1);
//     //     }
//     // }

//     function decreaseItemQuantity(productName) {
//         const item = cart.find(item => item.name === productName);
//         if (item && item.quantity > 1) {
//             item.quantity--;
//         }
//     }

//     function increaseItemQuantity(productName) {
//         const item = cart.find(item => item.name === productName);
//         if (item) {
//             item.quantity++;
//         }
//     }

//     function calculateTotalAmount() {
//         const totalElement = document.getElementById('cart-total');
//         let totalAmount = 0;
    
//         cart.forEach(item => {
//             totalAmount += parseFloat(item.price) * item.quantity;
//         });
    
//         // Display the total amount with 2 decimal places
//         totalElement.textContent = "$" + totalAmount.toFixed(2);
//     }

//     // Initialize the cart display
//     updateCartDisplay();
// });



const cart = [];

document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-cart");
    const cartItemsList = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    const cartItemCountElement = document.getElementById("cart-count");
    const cartSymbol = document.getElementById("cart-symbol");
    const cartSymbolBurger = document.getElementById("cart-symbol-burger");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productName = button.parentElement.previousElementSibling.textContent;
            const productPrice = button.parentElement.querySelector('.add-cart').previousElementSibling.textContent;
            const productImage = button.parentElement.parentElement.querySelector(".products-img img").src;

            addToCart(productName, productPrice, productImage);
            updateCartDisplay();
            calculateTotalAmount();
        });
    });

    function addToCart(productName, productPrice, productImage) {
        const cleanedPrice = parseFloat(productPrice.replace(/\$/g, '').trim());

        const existingItem = cart.find(item => item.name === productName);

        if (existingItem) {
            existingItem.quantity++;
            existingItem.itemTotal = existingItem.price * existingItem.quantity; // Calculate item total
        } else {
            const newItem = { name: productName, price: cleanedPrice, image: productImage, quantity: 1 };
            newItem.itemTotal = newItem.price * newItem.quantity; // Calculate item total for the new item
            cart.push(newItem);
        }
    }

    function updateCartDisplay() {
        cartItemsList.innerHTML = "";

        cart.forEach(item => {
            const cartItem = document.createElement("div");

            cartItem.innerHTML = `
            <div class="cart-products-icons">
                <i class='bx bx-heart' ></i>
                <i class='bx bx-x remove-item'></i>
            </div>
            <div class="cart-products-img">
                <img src="${item.image}" alt="products">
            </div>
            <h3>${item.name}</h3>
            <div class="cart-products-buy">
                <h4>$${item.price}</h4>
                <span class="cart-arrows">
                    <i class='bx bxs-left-arrow left-arrow'></i>
                    <p>${item.quantity}</p>
                    <i class='bx bxs-right-arrow right-arrow'></i>
                </span>
                </div>
                `;
                // <p>Total: $${item.itemTotal.toFixed(2)}</p> <!-- Display item total -->
                
            cartItemsList.appendChild(cartItem);


            const removeButtons = cartItem.querySelectorAll(".remove-item");
            removeButtons.forEach(removeButton => {
                removeButton.addEventListener("click", () => {
                    removeCartItem(item.name);
                });
            });


            const decreaseButtons = cartItem.querySelectorAll(".left-arrow");
            decreaseButtons.forEach(button => {
                button.addEventListener("click", () => {
                    if (item.quantity > 1) {
                        item.quantity--;
                        item.itemTotal = item.price * item.quantity; // Recalculate item total
                        updateCartDisplay();
                        calculateTotalAmount();
                    }
                });
            });

            const increaseButtons = cartItem.querySelectorAll(".right-arrow");
            increaseButtons.forEach(button => {
                button.addEventListener("click", () => {
                    item.quantity++;
                    item.itemTotal = item.price * item.quantity; // Recalculate item total
                    updateCartDisplay();
                    calculateTotalAmount();
                });
            });
            updateItemCount()
            updateCartSymbol()
            updateCartSymbolBurger()
        });
    }

    function removeCartItem(productName) {
        const itemIndex = cart.findIndex(item => item.name === productName);
        if (itemIndex !== -1) {
            cart.splice(itemIndex, 1);
            updateCartDisplay();
            calculateTotalAmount();
            updateItemCount();
            updateCartSymbol();
            updateCartSymbolBurger();
        }
    }

    function calculateTotalAmount() {
        let totalAmount = 0;

        cart.forEach(item => {
            totalAmount += item.itemTotal; // Sum up item totals
        });

        cartTotalElement.textContent = "$" + totalAmount.toFixed(2);
    }

    function updateItemCount() {
        let totalCount = 0;

        cart.forEach(item => {
            totalCount += item.quantity;
        });

        cartItemCountElement.textContent = totalCount;
    }

    function updateCartSymbol() {
        let totalCount = 0;

        cart.forEach(item => {
            totalCount += item.quantity;
        });

        cartSymbol.textContent = totalCount;
    }

    function updateCartSymbolBurger() {
        let totalCount = 0;

        cart.forEach(item => {
            totalCount += item.quantity;
        });

        cartSymbolBurger.textContent = totalCount;
    }
    
    
    updateCartDisplay();
    calculateTotalAmount();
    updateItemCount();
    updateCartSymbol();
    updateCartSymbolBurger();
});

    function cartOpening() {
        const cartOpen = document.querySelector(".cart");
        cartOpen.style.left = "calc(100% - 500px)";
    }

    function cartOpeningBurger() {
        const cartOpen = document.querySelector(".cart");
        cartOpen.style.left = "calc(100% - 100%)"
    }

    function closeCart() {
        const cartClose = document.querySelector(".cart")
        cartClose.style.left = "100%";
    }

    function seeMore() {
        const seeMore = document.getElementById("see-more-div");
        const seeMoreBtn = document.getElementById("see-more");
        seeMore.style.display = "flex";
        seeMoreBtn.style.display = "none";
    }


                                        // Burger

let burger = document.querySelector('.bars-burger');
let headerBurger = document.querySelector(".header-burger");
let navLinks = document.querySelector(".navbar-burger");
let navClick = document.querySelectorAll(".click");
const sectionAll = document.querySelectorAll('section');

function burgerMenu() {

    if (navLinks.style.display !== "none") {
        navLinks.style.display = "none";
    }

    burger.addEventListener("click", () => {
        if (navLinks.style.display === "none" || navLinks.style.display === "") {
            // headerBurger.style.height = "400px";
            navLinks.style.display = "flex";
            // navLinks.style.transition = "all 0.3s";
            // navLinks.style.transform = "translateY(47px)";
        } else {
            // headerBurger.style.height = "73px";
            navLinks.style.display = "none";
            // navLinks.style.transform = "translateY(-200px)";
        }
    });

    navClick.forEach(function click(e) {
        e.addEventListener("click", event => {
            headerBurger.style.height = "73px";
            navLinks.style.display = "none";
            removeClass();
            event.target.classList.add("active");
        })
    })
}

burgerMenu();