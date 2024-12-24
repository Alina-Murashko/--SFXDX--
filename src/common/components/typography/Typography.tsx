import {
  ComponentPropsWithoutRef,
  ElementType,
} from 'react'

import classNames from 'classnames'

import s from './typography.module.scss'


type Props<T extends ElementType> = {
  as?: T
  variant?:
    | 'title1' | 'link'
    | 'subtitle1'
} & ComponentPropsWithoutRef<T>


export function Typography<T extends ElementType = 'span'>(
  props: Props<T>,
) {
  const { as: Component = 'span', className, variant = 'title', ...restProps } = props

  return (
    <Component className={classNames( s[variant], className)} {...restProps} />
  )
}

