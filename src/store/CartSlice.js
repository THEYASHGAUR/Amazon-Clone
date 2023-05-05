import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartState: false,
    cartItems: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
};

const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        setAddItemCart: (state, action) => {
            console.log("ritu ");
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            } else {
                const temp = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(temp);
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        }
    }
});

export const {
    setAddItemCart,
} = CartSlice.actions;

export default CartSlice.reducer;
