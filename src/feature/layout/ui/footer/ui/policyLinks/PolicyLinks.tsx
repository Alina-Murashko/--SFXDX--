import {ComponentPropsWithoutRef} from "react";
import classNames from "classnames";
import s from './policyLinks.module.scss'
import {Typography} from "@/common/components";

export const PolicyLinks = ({className, ...rest}: ComponentPropsWithoutRef<'div'>) => {

    return (
        <div className={classNames(s.policyLinks, className)} {...rest}>
            <Typography variant={'title1'} as={'button'}>Privacy Policy</Typography>
            <Typography variant={'title1'} as={'button'}>Terms & Conditions</Typography>
            <Typography variant={'title1'} as={'button'}>Cookie Policy</Typography>
        </div>
    )
}

PolicyLinks.displayName = 'PolicyLinks'
