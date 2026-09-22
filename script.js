```javascript
let cart = [];


// ================= TAMBAH KE KERANJANG =================

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    // Buka keranjang
    openCart();
}


// ================= UPDATE KERANJANG =================

function updateCart() {

    const cartCount = document.getElementById("cart-count");

    const cartItems = document.getElementById("cart-items");

    const cartTotal = document.getElementById("cart-total");


    // Jumlah item
    cartCount.textContent = cart.length;


    // Kosong
    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p style="
                text-align:center;
                color:#777;
                padding:30px 0;
            ">
                Keranjang masih kosong 🍧
            </p>
        `;

        cartTotal.textContent = "Rp0";

        return;
    }


    let total = 0;

    cartItems.innerHTML = "";


    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `

            <div class="cart-item">

                <div>
                    <h4>${item.name}</h4>

                    <p>
                        Rp${item.price.toLocaleString("id-ID")}
                    </p>
                </div>

                <button
                    class="remove-btn"
                    onclick="removeItem(${index})">

                    Hapus

                </button>

            </div>

        `;
    });


    cartTotal.textContent =
        "Rp" + total.toLocaleString("id-ID");
}


// ================= HAPUS ITEM =================

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}


// ================= BUKA CART =================

function openCart() {

    document
        .getElementById("cartOverlay")
        .classList.add("active");
}


// ================= TUTUP CART =================

function closeCart() {

    document
        .getElementById("cartOverlay")
        .classList.remove("active");
}


// ================= CHECKOUT =================

function checkout() {

    if (cart.length === 0) {

        alert("Keranjang masih kosong!");

        return;
    }


    let message =
        "Halo, saya ingin memesan:%0A%0A";


    let total = 0;


    cart.forEach((item, index) => {

        message +=
            `${index + 1}. ${item.name} - Rp${item.price.toLocaleString("id-ID")}%0A`;

        total += item.price;
    });


    message +=
        `%0ATotal: Rp${total.toLocaleString("id-ID")}`;


    // GANTI NOMOR WHATSAPP
    const phone = "6281234567890";


    window.open(
        `https://wa.me/${phone}?text=${message}`,
        "_blank"
    );
}


// ================= KLIK DI LUAR CART =================

document
    .getElementById("cartOverlay")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeCart();
        }

    });
```
