//memory cost function
function totalCost() {
    const memoryInput = document.getElementById('memoryCost');
    const newMemoryText = memoryInput.innerText;
    const memoryCost = parseInt(newMemoryText);

    const memoryTotal = document.getElementById('totalPrice');
    let previousMomeryCost = memoryTotal.innerText;
    let previousMemoryCostAmount = parseInt(previousMomeryCost);
    let newMemoryCost = previousMemoryCostAmount + memoryCost;
    memoryTotal.innerText = newMemoryCost;

}
function totalMemoryCost(id, price) {
    document.getElementById(id).addEventListener('click', function () {
        if (price == 0) {
            memoryCost.innerText = 0;
        }
        else {
            memoryCost.innerText = 180;
        }
        totalCost()
    })
}
totalMemoryCost('ram1', 0);
totalMemoryCost('ram2', 180);

//storage function
function totalCost2(id, price) {
    const memoryInput = document.getElementById('storageCost');
    const newMemoryText = memoryInput.innerText;
    const memoryCost = parseInt(newMemoryText);

    const memoryTotal = document.getElementById('totalPrice');
    let previousMomeryCost = memoryTotal.innerText;
    let previousMemoryCostAmount = parseInt(previousMomeryCost);
    let newMemoryCost = previousMemoryCostAmount + memoryCost;
    memoryTotal.innerText = newMemoryCost;

}
function totalStorageCost(id, price) {
    document.getElementById(id).addEventListener('click', function () {
        if (price == 0) {
            storageCost.innerText = 0;
        }
        else if (price == 100) {
            storageCost.innerText = 100;
        }
        else {
            storageCost.innerText = 180;
        }
        totalCost2()
    })
}
totalStorageCost('storage1', 0);
totalStorageCost('storage2', 100);
totalStorageCost('storage3', 180);
//delivery function
function totalCost3(id, price) {
    const memoryInput = document.getElementById('memoryCost');
    const newMemoryText = memoryInput.innerText;
    const memoryCost = parseInt(newMemoryText);

    const memoryTotal = document.getElementById('totalPrice');
    let previousMomeryCost = memoryTotal.innerText;
    let previousMemoryCostAmount = parseInt(previousMomeryCost);
    let newMemoryCost = previousMemoryCostAmount + memoryCost;
    memoryTotal.innerText = newMemoryCost;

}
function totalDeliveryCost(id, price) {
    document.getElementById(id).addEventListener('click', function () {
        if (price == 0) {
            deliveryCost.innerText = 0;
        }
        else {
            deliveryCost.innerText = 20;
        }
        totalCost3()
    })
}
totalDeliveryCost('delivery1', 0);
totalDeliveryCost('delivery2', 20);
//my luck
function totalCost4(id, text) {
    const memoryInput = document.getElementById('input-text');
    const totalInput = memoryInput.innerText;
    if (totalInput == 'stevekaku') {
        totalPromoCost.innerText = totalPrice - (totalPrice * (20 / 100));
    }
    else {
        totalPromoCost.innerText = totalPrice;
    }
    // const memoryCost = parseInt(newMemoryText);

    const memoryTotal = document.getElementById('totalPromoCost');
    let previousMomeryCost = memoryTotal.innerText;
    let previousMemoryCostAmount = parseInt(previousMomeryCost);
    let newMemoryCost = previousMemoryCostAmount + totalPromoCost.innerText;
    memoryTotal.innerText = newMemoryCost;

}
function totalPromoCost(id) {
    document.getElementById(id).addEventListener('click', function () {

        totalCost4()
    })
}
totalPromoCost('submit');




//pomo field
/*function totalPromo() {
    document.getElementById('submit').addEventListener('click', function () {

    })
    totalCost4();
    // totalInput.value = '';
}
// totalPromo();
function totalCost4(id) {
    const totalInput = document.getElementById('input-text');
    const newMemoryText = totalInput.value;
    if (newMemoryText == 'stevekaku') {
        totalPromoCost.innerText = 1299;
        // total = parseFloat(totalPromoCost);
        totalPromoCost.innerText = totalPrice - (totalPrice * (20 / 100));
    }
    else {
        totalPromoCost.innerText = totalPrice;
    }
    const promoTotal = document.getElementById('total');
    let previousPromo = promoTotal.innerText;
    let previousCost = parseFloat(previousPromo);
    // let newPromo = previousCost % 20;
    promoTotal.innerText = newPromo;
    /*const memoryCost = parseInt(newMemoryText);

    const memoryTotal = document.getElementById('total');
    let previousMomeryCost = memoryTotal.innerText;
    let previousMemoryCostAmount = parseInt(previousMomeryCost);
    let newMemoryCost = previousMemoryCostAmount + memoryCost;
    memoryTotal.innerText = newMemoryCost;*/
    // totalInput.value = '';

