import { Title } from '../components/title';
import styles from '../css/home.module.css';

export const Home = () => (
  <div className="page">
    <Title title="当サイトの概要" />
    <p>当サイトでは松江高専学生会のメンバー紹介や活動報告、近況報告を行います。</p>
    <p>また、メールアドレスを記載してありますので、意見・要望・質問などしていただければ幸いです。</p>
    <p>外部の方に、もっと松江高専のことを知ってもらえればいいと思い、日々更新していこうと思っています。</p>
    <p>松江高専のHP、また、学生会によるtwitterやInstagramも併せてよろしくお願いします。</p>
    <ul className={styles.links}>
      <LinkItem to="https://www.matsue-ct.jp">松江高専HP</LinkItem>
      <LinkItem to="https://twitter.com/MctGakuseikai">学生会Twitter</LinkItem>
    </ul>
    <hr />
    <p>ここに記事をおく予定 まだバックエンドできてないからごめん</p>
  </div>
);

const LinkItem = (props: { to: string; children: string }) => (
  <li>
    <a href={props.to} className={styles.link} target="_blank">
      {props.children}
    </a>
  </li>
);
