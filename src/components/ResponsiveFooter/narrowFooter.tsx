import { Link } from "react-router-dom";

import TwitterLogo from "../../assets/TwitterLogo.svg";
import InstagramLogo from "../../assets/InstagramLogo.svg";
import styles from "../../css/Footer/narrowFooter.module.css"
type Props = {
  setNavOpen: (value: boolean) => void;
}
export const NarrowFooter = (props :Props) => (
  <footer className={styles.footer}>
    <div className={styles.links}>
      <ul className={styles.ul}>
        <LinkItem to="/schedule" children="活動予定" setNavOpen={props.setNavOpen} />
        <LinkItem to="/clubs"     children="部活動" setNavOpen={props.setNavOpen} />
        <LinkItem to="/members"  children="学生会メンバー" setNavOpen={props.setNavOpen} />
        <LinkItem to="/links"    children="リンク" setNavOpen={props.setNavOpen} />
        <LinkItem to="/industori" children="インダスとり" setNavOpen={props.setNavOpen} />
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

const LinkItem = (props: { children: string, to: string, setNavOpen: (value: boolean) => void }) => (
  <li className={styles.li}>
    <Link to={props.to} children={props.children} className={styles.link} onClick={() => props.setNavOpen(false)}/>
  </li>
)

const LinkIcon = (props: { to: string, src: string, alt: string }) => (
  <Link to={props.to}>
    <img src={props.src} alt={props.alt} className={styles.icon} />
  </Link>
)
