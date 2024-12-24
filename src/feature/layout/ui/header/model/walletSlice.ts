import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {getMetamaskEthereumProvider} from "../api/walletApi";
import {toggleWrongNetwork} from "../../modals/modal";
import {MetamaskRequestMethods} from "@/common/enums";
import {Network, networkChains} from "@/common/constants";
import {WalletAddress} from "@/common/types";

const initialState: WalletInitialState = {
    walletAddress: null
}

const slice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        changeAddressAccount(state, action: PayloadAction<{ address: string[] | null }>) {
            if (action.payload.address) {
                state.walletAddress = action.payload.address[0]
            } else {
                state.walletAddress = action.payload.address
            }
        },
    },
})

let accountChangedHandler: (accounts: string[]) => void
let chainChangedHandler: (chainId: string) => void

export const addWalletListeners = createAsyncThunk(
    'wallet/addWalletListeners',
    async (_, {dispatch}) => {
        const provider = await getMetamaskEthereumProvider();
        if (!provider) return;

        chainChangedHandler = (chainHexId: string) => {
            if (networkChains[Network.Amoy] !== chainHexId) {
                dispatch(toggleWrongNetwork({isOpen: true}))
            } else {
                dispatch(toggleWrongNetwork({isOpen: false}))
            }
        }
        accountChangedHandler = (accounts: string[]) => {
            if (accounts.length === 0) {
                dispatch(changeAddressAccount({address: null}));
            } else {
                dispatch(changeAddressAccount({address: accounts}));
            }
        };
        provider.on(MetamaskRequestMethods.accountsChanged, accountChangedHandler);
        provider.on(MetamaskRequestMethods.chainChanged, chainChangedHandler);

    }
);

export const removeWalletListeners = createAsyncThunk(
    'wallet/removeWalletListeners',
    async () => {
        const provider = await getMetamaskEthereumProvider();
        if (!provider) return;

        if (accountChangedHandler) {
            provider.off(MetamaskRequestMethods.accountsChanged, accountChangedHandler);
        }

        if (chainChangedHandler) {
            provider.off(MetamaskRequestMethods.chainChanged, chainChangedHandler);
        }
    }
);

export type WalletInitialState = {
    walletAddress: WalletAddress
}

export const {changeAddressAccount} = slice.actions
export const walletSlice = slice.reducer
