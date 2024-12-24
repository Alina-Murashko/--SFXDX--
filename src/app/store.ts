import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {modalSlice} from "@/feature/layout/ui/modals/modal";
import {walletSlice} from "@/feature/layout/ui/header/model/walletSlice";

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
  reducer: {
    modal: modalSlice,
    wallet: walletSlice,
  },
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

