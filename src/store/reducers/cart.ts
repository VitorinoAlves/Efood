import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemCardapio, Restaurante } from "../../components/RestoList";

type CartState = {
    items: ItemCardapio[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCartStore: (state, action: PayloadAction<ItemCardapio>) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<ItemCardapio>) => {
            const indexToRemove = state.items.findIndex(item => item.id === action.payload.id);
            if (indexToRemove !== -1) {
                state.items.splice(indexToRemove, 1);
            }
        },
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        },
        clear: (state) => {
            state.items = []
        }
    }
});

export const { addToCartStore, removeFromCart, open, close, clear } = cartSlice.actions;

export default cartSlice.reducer;