import {ComponentPropsWithoutRef} from "react";
import classNames from "classnames";
import s from './logo.module.scss';
import {Typography} from "@/common/components";
import Logotype from "@/assets/icons/Logotype";

export const Logo = ({className, ...rest}: ComponentPropsWithoutRef<'a'>) => {

    return (
        <Typography as={'a'} className={classNames(s.logo, className)} {...rest} href={''}>
            <Logotype/>
        </Typography>
    )
}
