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
        <Link to="/" children="松江高専　学生会" className={styles['primary-header-link']} />
      </div>
      <div onClick={OnClickMenuButton} className={styles['menu-button']}>
        {props.navOpen ? 'Close⬆' : 'Menu⬇︎'}
      </div>
    </header>
  );
};
