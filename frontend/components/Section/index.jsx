import React from 'react'
import cn from 'classnames';
import styles from './index.module.scss';

export default function Section({
  className,
  children
}) {
  return (
    <div className={cn(className, styles.section)}>{children}</div>
  )
}
