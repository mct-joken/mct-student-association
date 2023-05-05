import { Link } from 'react-router-dom';

import TwitterLogo from '../../assets/TwitterLogo.svg';
import InstagramLogo from '../../assets/InstagramLogo.svg';
import styles from '../../css/Header/wideHeader.module.css';

export const WideHeader = () => (
  <header className={styles.header}>
    <div className={styles['primary-header']}>
      <Link to="/" children="松江高専　学生会" className={styles['primary-header-link']} />
    </div>
    <div className={styles.links}>
      <LinkItem to="/schedule" children="活動予定" />
      <LinkItem to="/club" children="部活動" />
      <LinkItem to="/members" children="学生会メンバー" />
      <LinkItem to="/links" children="リンク" />
      <LinkItem to="/industry" children="インダストリ" />
    </div>
    <div className={styles.icons}>
      <LinkIcon to="https://twitter.com/MctGakuseikai/" src={TwitterLogo} alt="松江高専学生会のTwitter" />
      <LinkIcon to="https://www.instagram.com/mctgakuseikai/" src={InstagramLogo} alt="松江高専学生会のInstagram" />
    </div>
  </header>
);

const LinkItem = (props: { children: string; to: string }) => (
  <Link to={props.to} children={props.children} className={styles.link} />
);

const LinkIcon = (props: { to: string; src: string; alt: string }) => (
  <Link to={props.to}>
    <img src={props.src} alt={props.alt} className={styles.icon} />
  </Link>
);
