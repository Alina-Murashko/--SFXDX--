import s from './modalWrong.module.scss';
import {Button, Modal, Typography} from "@/common/components";

type Props = {
    onOpenChange: () => void
    isOpen: boolean
}

export const ModalWrong = ({onOpenChange, isOpen}: Props) => {
    return (
        <Modal onOpenChange={onOpenChange} open={isOpen} title={'Wrong Network'}>
            <div className={s.modalContent}>
                <Typography as={'p'} variant={'title1'}>
                    Wrong network, please, select Ethereum Limit price (in Token B) blockchain.
                </Typography>
                <Button fullWidth variant={'primary'} onClick={onOpenChange}>Okay</Button>
            </div>
        </Modal>
    )
}
