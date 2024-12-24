import s from './buttonMetamask.module.scss'
import {ComponentPropsWithoutRef} from "react";
import {Button} from "@/common/components";
import Metamask from "@/assets/icons/Metamask";
import {trimString} from "@/common/utils";
import Frame from "@/assets/icons/Frame";

type Props = {
    handleCopyToClipboard: () => void;
    walletAddress: string;
} & ComponentPropsWithoutRef<'button'>

export const ButtonMetamask = ({handleCopyToClipboard, walletAddress, ...rest}: Props) => {

    return (
        <Button variant={'primary-active'} onClick={handleCopyToClipboard} {...rest} >
            <Metamask className={s.metamaskIcon}/>
            <span>{trimString(walletAddress, 10, 4)}</span>
            <Frame className={s.frame}/>
        </Button>
    )
}
