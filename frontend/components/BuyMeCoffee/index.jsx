import cl from 'classnames';
import ScreenEgg from '../ScreenEgg';
import styles from './index.module.scss';

export default function BuyMeCoffee({ className }) {
  return (
    <ScreenEgg type='right'>
      <div className={cl(className, styles.buyCoffee)}>
        <a
          className={styles.buyCoffeeButton}
          href='https://buy.stripe.com'
          target='_blank'
          rel='noreferrer'>
          Buy me coffee..
        </a>
      </div>
    </ScreenEgg>
  );
}
