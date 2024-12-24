import {Chain} from "@/common/types";

export enum Network {
    Amoy = 'Amoy',
}

export const networkChains: Record<Network, string> = {
    [Network.Amoy]: '0x13882',
};

type Chains = Pick<Record<Network, Chain>, Network>;

export const chains: Chains = {
    [Network.Amoy]: {
        chainId: networkChains[Network.Amoy],
        chainName: 'Amoy',
        nativeCurrency: {
            name: 'POL',
            decimals: 18,
            symbol: 'POL'
        },
        rpcUrls: ['https://rpc-amoy.polygon.technology'],
        blockExplorerUrls: ['https://amoy.polygonscan.com']
    },
};
