export const priceRow = (qty, unit) => {
    return qty * unit;
}

export const totalPrice = (items) => {
    let total = 0;
    items.map((item) => {
       return total = total + (item.product.price * item.quantity);
    });
    return total;
}

export const totalQty = (items) => {
    let total = 0;
    items.map((item) => {
       return total = total + item.quantity;
    });
    return total;
}
