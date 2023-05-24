import React from 'react';
import cl from 'classnames'
import styles from './index.module.scss';

export default function Button({ 
  className,
  onClick, 
  disabled, 
  children 
}) {
  return (
    <button 
      className={cl(className, styles.button)} 
      onClick={onClick} 
      disabled={disabled}>
      {children}
    </button>
  );
}
