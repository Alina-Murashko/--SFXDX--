import classNames from 'classnames'
import {ComponentPropsWithoutRef, useEffect} from "react";
import {getUserAddress} from "./api/walletApi";
import {addWalletListeners, changeAddressAccount, removeWalletListeners} from "./model/walletSlice";
import {ButtonMetamask} from "./ui/ButtonMetamask/ButtonMetamask";
import s from './header.module.scss'
import {Button, Logo} from "@/common/components";
import {copyToClipboard} from "@/common/utils";
import {useAppDispatch, useAppSelector} from "@/app/hooks";

export const Header = ({className, ...rest}: ComponentPropsWithoutRef<'header'>) => {
    const walletAddress = useAppSelector(state => state.wallet.walletAddress);
    const dispatch = useAppDispatch();

    const handleGetUserAddress = async () => {
        const address = await getUserAddress()
        if (address && address.length !== 0) {
            dispatch(changeAddressAccount({address}))
        }
    }

    const handleCopyToClipboard = async () => {
        if (walletAddress) {
            await copyToClipboard(walletAddress)
        }
    }

    useEffect(() => {
        dispatch(addWalletListeners());
        return () => {
            dispatch(removeWalletListeners());
        }
    }, [dispatch]);

    return (
        <header className={classNames(s.header, className)} {...rest}>
            <Logo className={s.headerLogo}/>
            {walletAddress
                ? <ButtonMetamask walletAddress={walletAddress} handleCopyToClipboard={handleCopyToClipboard}/>
                : <Button variant={'primary'} onClick={handleGetUserAddress}>Connect Wallet</Button>
            }
        </header>
    )
}

Header.displayName = 'Header'
