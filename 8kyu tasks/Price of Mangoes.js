function mango(quantity, price) {
    let totalCost = 0;

    // Calculate the number of mangoes for which the offer is applicable
    const applicableMangoes = Math.floor(quantity / 3) * 2;

    // Calculate the total cost of mangoes with the offer
    totalCost = applicableMangoes * price + (quantity % 3) * price;

    return totalCost;
}