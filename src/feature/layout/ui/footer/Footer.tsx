import {ComponentPropsWithoutRef} from "react";
import classNames from "classnames";
import {Socials} from "./ui/socials/Socials";
import {PolicyLinks} from "./ui/policyLinks/PolicyLinks";
import s from './footer.module.scss';
import {Logo, Typography} from "@/common/components";

export const Footer = ({className, ...rest}: ComponentPropsWithoutRef<'div'>) => {

    return (
        <footer className={classNames(s.footer, className)} {...rest}>
            <div className={s.wrapperInfo}>
                <PolicyLinks/>
                <Logo className={s.footerLogo}/>
                <Socials/>
            </div>
            <Typography variant={'subtitle1'} className={s.footerText}>©2024 All rights reserved. Powered by
                Amoy</Typography>
        </footer>
    )
}

Footer.displayName = 'Footer'
