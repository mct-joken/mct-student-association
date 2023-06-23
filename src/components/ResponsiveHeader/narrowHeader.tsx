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
      <Link to="/" children="松江高専　学生会"  onClick={() => props.setNavOpen(false) } className={styles['primary-header-link']} />
      <div onClick={OnClickMenuButton} className={styles['menu-button']}>
        {props.navOpen ? 'Close⬆' : 'Menu⬇︎'}
      </div>
    </header>
  );
};

