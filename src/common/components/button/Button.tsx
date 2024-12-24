import {
    ComponentPropsWithoutRef,
    ElementType,
} from 'react'

import classNames from 'classnames'

import s from './button.module.scss'

type ButtonVariant = 'primary' | 'icon' | 'primary-active'

type Props<T extends ElementType = 'button'> = {
    as?: T
    fullWidth?: boolean
    variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

export function Button<T extends ElementType = 'button'>(props: Props<T>) {
    const {
        as: Component = 'button',
        className,
        fullWidth = false,
        variant = 'primary',
        ...rest
    } = props

    return (
        <Component
            className={classNames(s.button, s[variant], fullWidth && s.fullWidth, className)}
            {...rest}
        />
    )
}
