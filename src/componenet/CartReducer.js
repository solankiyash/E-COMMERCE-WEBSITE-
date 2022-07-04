export const CartReducer = (state,action) => {
    const {shoppingCart,totalPrice,qty} = state;
    let data;
    let index;
    let updatePrice;
    let updateQty;
    switch(action.type){
        case 'ADD TO CART':
            const check = shoppingCart.find(data => data.id === action.id);
            if(check){
                return state;
            }else{
                data = action.data;
                data['qty'] = 1;
                updateQty = qty + 1;
                updatePrice = totalPrice + data.price;
                return {shoppingCart : [data,...shoppingCart],totalPrice:updatePrice,qty:updateQty}
            }
            break; 
            case 'INC':
            data = action.cart
            data.qty = data.qty + 1
            updatePrice = totalPrice  + data.price
            updateQty = qty + data.qty
            return {shoppingCart : [...shoppingCart],totalPrice:updatePrice,qty:updateQty}
            break;
            case 'DEC':
                data = action.cart
                if (data.qty > 1){
                        data.qty = data.qty - 1;
                        updatePrice = totalPrice - data.price;
                        updateQty = qty - data.qty;
                        return {shoppingCart : [...shoppingCart],totalPrice:updatePrice,qty:updateQty}
                }else{
                    return state;
                }
                break;

                case 'DEL':
                    const filtered = shoppingCart.filter(data => data.id !== action.id)
                    data = action.cart
                    updateQty = qty - data.qty;
                    updatePrice = totalPrice - data.price * data.qty;
                    return {shoppingCart:[...filtered],totalPrice:updatePrice,qty:updateQty}
                    break;


    }
}