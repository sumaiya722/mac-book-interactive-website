//memory function
const memoryPrice = document.getElementById('memoryCost');
const storagePrice = document.getElementById('storageCost');
const deliveryPrice = document.getElementById('deliveryCost');

function memoryCost(id, price) {
    document.getElementById(id).addEventListener('click', function () {

        if (price == 180) {
            memoryPrice.innerText = 180;
        }
        else {
            memoryPrice.innerText = 0;
        }
        totalCost();
    });
}
memoryCost('ram2', 180);
memoryCost('ram1', 0);
//storage cost
function storageCost(id, price) {
    document.getElementById(id).addEventListener('click', function () {

        if (price == 0) {
            storagePrice.innerText = 0;
        }
        else if (price == 100) {
            storagePrice.innerText = 100;
        }
        else {
            storagePrice.innerText = 180;
        }
        totalCost();
    });
}
storageCost('storage1', 0);
storageCost('storage2', 100);
storageCost('storage3', 180);
//delivery price
function deliveryCost(id, price) {
    document.getElementById(id).addEventListener('click', function () {

        if (price == 0) {
            deliveryPrice.innerText = 0;
        }
        else {
            deliveryPrice.innerText = 20;
        }
        totalCost();
    });
}
deliveryCost('delivery1', 0);
deliveryCost('delivery2', 20);
function totalCost() {
    const totalPrice = document.getElementById('totalPrice');
    const basePriceText = document.getElementById('bestPrice');
    const basePriceAmount = parseFloat(basePriceText.innerText);
    const totalMemoryCost = parseFloat(memoryPrice.innerText);
    const totalStorageCost = parseFloat(storagePrice.innerText);
    const totalDeliveryCost = parseFloat(deliveryPrice.innerText);
    totalPrice.innerText = basePriceAmount + totalMemoryCost + totalStorageCost + totalDeliveryCost;
    const totalPriceAmount = parseFloat(totalPrice.innerText);
    const promoPrice = document.getElementById('totalPromoPrice');
    promoPrice.innerText = totalPriceAmount;
    return totalPriceAmount;
}
//apply promocode
document.getElementById('submit').addEventListener('click', function () {
    const input = document.getElementById('input-text');
    const promoPrice = document.getElementById('totalPromoPrice');
    if (input.value == 'stevekaku') {
        const totalAmount = totalCost();
        const discountPrice = totalAmount - (totalAmount * (20 / 100));
        promoPrice.innerText = discountPrice;
    }
    else {
        alert('invalid promocode');
    }
    input.value = '';
})
