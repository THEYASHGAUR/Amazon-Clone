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
    name: 'cart',
    initialState,
    reducers: {
        setAddItemCart: (state, action) => {
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
        },
        setIncreaseItem: (state, action) => {
            console.log("inc")
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            }
            
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },

        setDecreaseItem: (state, action) => {
            console.log("dec");
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setRemoveItemFromCart: (state, action) => {
            // const removeItem = state.cartItems.filter(
            //   (item) => item.id !== action.payload.id
            // );

            // state.cartItems = removeItem;
            console.log("delete that item");
            // state.splice(action.payload , 1);
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        }

    }
});

export const {
    setAddItemCart,
    setDecreaseItem,
    setIncreaseItem,
    setRemoveItemFromCart
} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQuantity;

export default CartSlice.reducer;
