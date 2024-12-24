export enum MetamaskRequestMethods {
    requestAccounts = "eth_requestAccounts",
    accountsChanged = 'accountsChanged',
    chainChanged = 'chainChanged',
    switchChain = 'wallet_switchEthereumChain',
    addChain = 'wallet_addEthereumChain',
    chainId = 'eth_chainId',
}
