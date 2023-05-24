import React from 'react';
import cl from 'classnames';
import {
  AiFillYoutube,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import ScreenEgg from '../ScreenEgg';
import styles from './index.module.scss';

const socialNetworks = [
  {
    id: 1234,
    href: 'https://www.youtube.com',
    icon: AiFillYoutube,
  },
  {
    id: 4321,
    href: 'https://github.com',
    icon: AiFillGithub,
  },
  {
    id: 2314,
    href: 'https://twitter.com/',
    icon: AiFillTwitterCircle,
  },
  {
    id: 3241,
    href: 'https://www.instagram.com',
    icon: AiFillInstagram,
  },
  {
    id: 4123,
    href: 'https://www.linkedin.com',
    icon: AiFillLinkedin,
  },
];

export default function SocialNetworks({ className }) {
  return (
    <ScreenEgg type='left'>
      <ul className={cl(className, styles.list)}>
        {socialNetworks?.map(({ id, href, icon }) => (
          <li className={styles.listItem} key={id}>
            <a className={styles.listLink} href={href} target='_blank' rel='noreferrer'>
              {React.createElement(icon, {
                color: 'black',
                size: 50,
              })}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  );
}
