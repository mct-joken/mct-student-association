import { Link } from 'react-router-dom';

import styles from '../../css/Header/narrowHeader.module.css';

type Props = {
  navOpen: boolean;
  setNavOpen: (value: boolean) => void;
};

export const NarrowHeader = (props: Props) => {
  const OnClickMenuButton = () => {
    props.setNavOpen(!props.navOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles['primary-header']}>
        <LinkItem to="/" children="松江高専　学生会"  setNavOpen={props.setNavOpen} />
      </div>
      <div onClick={OnClickMenuButton} className={styles['menu-button']}>
        {props.navOpen ? 'Close⬆' : 'Menu⬇︎'}
      </div>
    </header>
  );
};
const LinkItem = (props: { children: string, to: string, setNavOpen: (value: boolean) => void }) => (
  <div className={styles['primary-header-link']}>
    <Link to={props.to} children={props.children} className={styles['primary-header-link']} onClick={() => props.setNavOpen(false)}/>
  </div>
)
