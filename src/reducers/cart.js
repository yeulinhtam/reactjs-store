const initialState = {
    items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
}

const findIndexProduct = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product._id === product._id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_CART':
            var { product, quantity } = action.payload;
            var newProducts = [...state.items];
            var index = findIndexProduct(newProducts, product);

            if (index !== -1) {
                newProducts[index].quantity += quantity;
            } else {
                newProducts.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('cart', JSON.stringify(newProducts));
            return {
                ...state,
                items: newProducts
            }

        case 'SUB_PRODUCT_CART':
            var { product, quantity } = action.payload;
            var newProducts = [...state.items];
            var index = findIndexProduct(newProducts, product);

            if (index !== -1) {
                if (newProducts[index].quantity === 1) {
                    newProducts.splice(index, 1);
                } else {
                    newProducts[index].quantity += quantity;
                }
            }
            localStorage.setItem('cart', JSON.stringify(newProducts));
            return {
                ...state,
                items: newProducts
            }

        case 'DELETE_PRODUCT_CART':
            var newProducts = [...state.items];
            var { product } = action.payload;
            index = findIndexProduct(newProducts, product);
            if (index !== -1) {
                newProducts.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(newProducts));
            return {
                ...state,
                items: newProducts
            }

        default: return state;
    }
}

export default cartReducer;