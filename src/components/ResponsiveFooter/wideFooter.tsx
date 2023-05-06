import { Link } from 'react-router-dom';

import styles from '../../css/Footer/wideFooter.module.css';

export const WideFooter = () => (
  <footer className={styles.footer}>
    <div className={styles.links}>
      <ul className={styles.ul}>
        <LinkItem to="/schedule" children="活動予定" />
        <LinkItem to="/club" children="部活動" />
        <LinkItem to="/members" children="学生会メンバー" />
        <LinkItem to="/links" children="リンク" />
        <LinkItem to="/industori" children="インダスとり" />
      </ul>
    </div>
  </footer>
);

const LinkItem = (props: { children: string; to: string }) => (
  <li>
    <Link to={props.to} children={props.children} className={styles.link} />
  </li>
);
