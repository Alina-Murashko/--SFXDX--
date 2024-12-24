import s from './socials.module.scss';
import {Button} from "@/common/components";
import Facebook from "@/assets/icons/Facebook";
import Twitter from "@/assets/icons/Twitter";
import YouTube from "@/assets/icons/YouTube";
import Instagram from "@/assets/icons/Instagram";

export const Socials = () => {

    return (
        <div className={s.socials}>
            <Button as={'a'} variant={'icon'} href={'https://www.facebook.com/?locale=ru_RU&refsrc=deprecated&_rdr'}>
                <Facebook/></Button>
            <Button as={'a'} variant={'icon'} href={'https://x.com/'}> <Twitter/></Button>
            <Button as={'a'} variant={'icon'} href={'https://www.youtube.com/'}> <YouTube/></Button>
            <Button as={'a'} variant={'icon'} href={'https://www.instagram.com/'}> <Instagram/></Button>
        </div>
    )
}

Socials.displayName = 'Socials'
