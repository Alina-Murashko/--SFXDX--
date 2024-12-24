import s from './home.module.scss'
import {ComponentPropsWithoutRef} from "react";
import classNames from "classnames";

export const Home = ({className, ...rest}: ComponentPropsWithoutRef<'div'>) => {
    return (
        <>
            <div className={classNames(s.wrapperSection, className)} {...rest}>
                <section className={s.section1}/>
                <section className={s.section2}/>
            </div>
            <section className={s.section3}/>
        </>
    )
}

Home.displayName = 'Home'
