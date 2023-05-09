import { Link } from "react-router-dom";

import TwitterLogo from "../../assets/TwitterLogo.svg";
import InstagramLogo from "../../assets/InstagramLogo.svg";
import styles from "../../css/Footer/narrowFooter.module.css"

export const NarrowFooter = () => (
  <footer className={styles.footer}>
    <div className={styles.links}>
      <ul className={styles.ul}>
        <LinkItem to="/schedule" children="活動予定" />
        <LinkItem to="/club"     children="部活動" />
        <LinkItem to="/members"  children="学生会メンバー" />
        <LinkItem to="/links"    children="リンク" />
        <LinkItem to="/industori" children="インダスとり" />
      </ul>
    </div>
    <div className={styles.icons}>
      <LinkIcon
        to="https://twitter.com/MctGakuseikai/"
        src={TwitterLogo}
        alt="松江高専学生会のTwitter"
      />
      <LinkIcon
        to="https://www.instagram.com/mctgakuseikai/"
        src={InstagramLogo}
        alt="松江高専学生会のInstagram"
      />
    </div>
  </footer>
)

const LinkItem = (props: { children: string, to: string }) => (
  <li className={styles.li}>
    <Link to={props.to} children={props.children} className={styles.link}/>
  </li>
)

const LinkIcon = (props: { to: string, src: string, alt: string }) => (
  <Link to={props.to}>
    <img src={props.src} alt={props.alt} className={styles.icon} />
  </Link>
)
