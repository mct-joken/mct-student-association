import { Link } from 'react-router-dom';

import styles from '../../css/Footer/wideFooter.module.css';

type Props = {
  setNavOpen: (value: boolean) => void;
};

export const WideFooter = (props: Props) => (
  <footer className={styles.footer}>
    <div className={styles.links}>
      <ul className={styles.ul}>
        <LinkItem to="/schedule" children="活動予定" setNavOpen={props.setNavOpen} />
        <LinkItem to="/club" children="部活動" setNavOpen={props.setNavOpen} />
        <LinkItem to="/members" children="学生会メンバー" setNavOpen={props.setNavOpen} />
        <LinkItem to="/links" children="リンク" setNavOpen={props.setNavOpen} />
        <LinkItem to="/industori" children="インダスとり" setNavOpen={props.setNavOpen} />
      </ul>
    </div>
  </footer>
);

const LinkItem = (props: { children: string; to: string; setNavOpen: (value: boolean) => void }) => (
  <li>
    <Link to={props.to} children={props.children} className={styles.link} onClick={() => props.setNavOpen(false)} />
  </li>
);
