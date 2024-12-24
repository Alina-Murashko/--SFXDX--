import classNames from 'classnames'
import {Header} from "./ui/header/Header";
import {Footer} from "./ui/footer/Footer";
import {Animation} from "./ui/animation/Animation";
import {Home} from "./ui/home/Home";
import {ModalWrong} from "./ui/modals/modalWrong/ModalWrong";
import {toggleWrongNetwork} from "./ui/modals/modal";
import s from './layout.module.scss'
import {useAppDispatch, useAppSelector} from "@/app/hooks";

export const Layout = () => {
    const dispatch = useAppDispatch();
    const isWrongModal = useAppSelector(state => state.modal.isWrongNetwork)

    const handleNetworkToggle = () => {
        dispatch(toggleWrongNetwork({isOpen: !isWrongModal}));
    };

    return (<div className={s.container}>
            <Animation/>
        <div className={classNames(s.content)}>
            <Header/>
            <main className={s.main}>
                <Home/>
            </main>
            <Footer/>
            <ModalWrong onOpenChange={handleNetworkToggle} isOpen={isWrongModal}/>
        </div>
    </div>

)
}

Layout.displayName = 'Layout'
