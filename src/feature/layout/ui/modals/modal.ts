import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: ModalInitialState = {
    isWrongNetwork: false,
}

const slice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleWrongNetwork: (state, action: PayloadAction<{ isOpen: boolean }>) => {
            state.isWrongNetwork = action.payload.isOpen;
        },
    },
});

export type ModalInitialState = {
    isWrongNetwork: boolean;
}
export const {toggleWrongNetwork} = slice.actions;

export const modalSlice = slice.reducer
