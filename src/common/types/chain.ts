export type Chain = {
    chainId: string
    chainName: string
    nativeCurrency: {
        name: string
        symbol: string
        decimals: number
    },
    rpcUrls: string[]
    blockExplorerUrls: string[]
};
