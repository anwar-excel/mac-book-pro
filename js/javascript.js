// function for price of every product 
function priceOfProduct(priceId, price) {
    const productCost = document.getElementById(priceId);
    productCost.innerText = parseInt(price);
    calculateTotal();
}

// total price 
function calculateTotal() {
    const memoryCost = document.getElementById('extraMemory').innerText;
    const ssdCost = document.getElementById('extraStorage').innerText;
    const deliveryCost = document.getElementById('deliveryCharge').innerText;
    const bestPrice = document.getElementById('bestPrice').innerText;
    const totalPrice = document.getElementById('totalPrice');
    const totalcost = document.getElementById('totalcost');
    totalPrice.innerText = parseInt(memoryCost) + parseInt(ssdCost) + parseInt(deliveryCost) + parseInt(bestPrice);
    totalcost.innerText = totalPrice.innerText;
}
// memory 
// memory 

document.getElementById('memory8GB').addEventListener('click', function () {
    priceOfProduct('extraMemory', 0);
})
document.getElementById('memory16GB').addEventListener('click', function () {
    priceOfProduct('extraMemory', 180);
})
// ssd 
// ssd 
document.getElementById('ssd256').addEventListener('click', function () {
    priceOfProduct('extraStorage', 0);
})
document.getElementById('ssd512').addEventListener('click', function () {
    priceOfProduct('extraStorage', 100);
})
document.getElementById('ssd1').addEventListener('click', function () {
    priceOfProduct('extraStorage', 180);
})
// delivery 
// delivery 
document.getElementById('deliveryFree').addEventListener('click', function () {
    priceOfProduct('deliveryCharge', 0);
})
document.getElementById('delivery20').addEventListener('click', function () {
    priceOfProduct('deliveryCharge', 20);
})

// promo check 
// promo check 
document.getElementById('promoBtn').addEventListener('click', function () {
    const promoField = document.getElementById('promoField');
    const totalPrice = document.getElementById('totalPrice');
    const totalcost = document.getElementById('totalcost');
    const discount = parseInt(totalPrice.innerText) * 0.2;
    if (promoField.value == 'stevekaku') {
        totalcost.innerText = parseInt(totalPrice.innerText) - discount;
    } else {
        totalcost.innerText = parseInt(totalPrice.innerText);
    }
    promoField.value = '';
})