import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Restaurante } from "../../components/RestoList";

type CartState = {
    items: Restaurante[]
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
        add: (state, action: PayloadAction<Restaurante>) => {
            state.items.push(action.payload);
        }
    }
});

export const { add } = cartSlice.actions;

export default cartSlice.reducer;