import {Chain} from "@/common/types/index";
import {MetamaskRequestMethods} from "@/common/enums";

type RequestObj = {
    method: string
    params?: Chain[] | {chainId: string}[]
}

export type MetaMaskEthereumProvider = {
    isMetaMask: boolean;
    request: <T>(obj: RequestObj) => Promise<T>
    on: (ev: MetamaskRequestMethods, cb: (data: never) => void) => void
    off: (ev: MetamaskRequestMethods, cb: (data: never) => void) => void
    selectedAddress: string
}

export type WalletAddress = string | null
