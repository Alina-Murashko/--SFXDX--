import detectEthereumProvider from "@metamask/detect-provider";
import {chains, Network, networkChains} from "@/common/constants";
import {MetamaskRequestMethods} from "@/common/enums";
import {MetaMaskEthereumProvider} from "@/common/types";

export const getMetamaskEthereumProvider = async (): Promise<MetaMaskEthereumProvider> => {
    return await detectEthereumProvider() as MetaMaskEthereumProvider
};

export const switchMetamaskChain = async (network: Network) => {
    const metaMaskEthereumProvider = await getMetamaskEthereumProvider();
    if (metaMaskEthereumProvider && metaMaskEthereumProvider.isMetaMask) {
        return await metaMaskEthereumProvider.request({
            method: MetamaskRequestMethods.switchChain,
            params: [{chainId: networkChains[network]}],
        });
    }
}

export const addMetamaskChain = async (network: Network) => {
    const metaMaskEthereumProvider = await getMetamaskEthereumProvider();
    if (metaMaskEthereumProvider && metaMaskEthereumProvider.isMetaMask) {
        return await metaMaskEthereumProvider.request({
            method: MetamaskRequestMethods.addChain,
            params: [chains[network]],
        });
    }
}

export const getMetamaskChainId = async () => {
    const metaMaskEthereumProvider = await getMetamaskEthereumProvider();
    if (metaMaskEthereumProvider && metaMaskEthereumProvider.isMetaMask) {
        return await metaMaskEthereumProvider.request<string>({method: MetamaskRequestMethods.chainId})
    }
};

export const getUserAddress = async () => {
    const metaMaskEthereumProvider = await getMetamaskEthereumProvider();
    if (metaMaskEthereumProvider && metaMaskEthereumProvider.isMetaMask) {
        const currentChainId = await getMetamaskChainId()

        if (currentChainId !== networkChains[Network.Amoy]) {
            try {
                await switchMetamaskChain(Network.Amoy)
            } catch (e) {
                console.log(e)
                await addMetamaskChain(Network.Amoy)
            }
        }
        return await metaMaskEthereumProvider.request<string[]>({method: MetamaskRequestMethods.requestAccounts})
    }
}
