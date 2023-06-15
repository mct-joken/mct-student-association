import { Title } from '../components/title';
import { ClubCard } from '../components/clubCard';
import { Club } from '../components/clubCard';
import '../css/clubs.css';
export const Clubs = () => (
  <center className={'page'} id={'clubs'}>
    <Title title={'部活動'} />
    <h3>体育局</h3>
    <div
      style={{
        flexWrap: 'wrap',
        display: 'flex',
        width: '80%',
        maxWidth: '800px',
        minWidth: '300px',
        justifyContent: 'space-between',
      }}
    >
      {athletic_clubs.map((club) => (
        <ClubCard club={club} />
      ))}
    </div>
    <h3>文化局</h3>
    <div
      style={{
        flexWrap: 'wrap',
        display: 'flex',
        width: '80%',
        maxWidth: '800px',
        minWidth: '300px',
        justifyContent: 'space-between',
      }}
    >
      {cultural_clubs.map((club) => (
        <ClubCard club={club} />
      ))}
    </div>
  </center>
);

const athletic_clubs: Club[] = [
  { name: '男子バレーボール部' },
  { name: '女子バレーボール部' },
  { name: '男子バスケットボール部', twitter: 'https://twitter.com/Matsuekosen_BB' },
  { name: '女子バスケットボール部', instagram: 'https://twitter.com/manken_mct' },
  { name: 'ハンドボール部', instagram: 'https://www.instagram.com/mct.handball/' },
  { name: 'ソフトテニス部' },
  { name: '硬式テニス部' },
  { name: '高野連野球部' },
  { name: '高専野球部' },
  { name: '陸上競技部', twitter: 'https://twitter.com/matsue_ct_TF' },
  { name: 'サッカー部', twitter: 'https://twitter.com/mct_football' },
  { name: 'ラグビー部', instagram: 'https://www.instagram.com/matsue_rugby/' },
  {
    name: 'ボート部',
    twitter: 'https://twitter.com/Matsuekosen_BB',
    instagram: 'https://www.instagram.com/mctrt_official/',
  },
  { name: '弓道部' },
  { name: '卓球部', instagram: 'https://www.instagram.com/mct.tabletennis/' },
  { name: '水泳部', twitter: 'https://twitter.com/matsue_ct_swim' },
  { name: '剣道部' },
  { name: '柔道部', twitter: 'https://twitter.com/Mct_judo20' },
  { name: 'バドミントン部' },
  { name: 'アーチェリー部' },
];
const cultural_clubs: Club[] = [
  { name: '情報科学研究部', twitter: 'https://twitter.com/mct_joken', homepage: 'https://joken.dev' },
  { name: '吹奏楽部', twitter: 'https://twitter.com/mctbb_prm', instagram: 'https://www.instagram.com/mct_windclub/' },
  { name: '文芸部' },
  { name: '写真部', twitter: 'https://twitter.com/mct_shashinbu', instagram: 'https://www.instagram.com/mct.photos/' },
  {
    name: '郷土研究部',
    twitter: 'https://twitter.com/kyoudoken',
    instagram: 'https://www.instagram.com/mct.kyodo_club/',
  },
  {
    name: '囲碁・将棋部',
    twitter: 'https://twitter.com/MCTIgoShogi',
    instagram: 'https://www.instagram.com/mct_shogi_club/',
  },
  { name: '美術部' },
  { name: '漫画研究同好会', twitter: 'https://twitter.com/manken_mct' },
  { name: '理科部' },
  { name: '書道部' },
  { name: '数学同好会' },
  { name: 'クイズ研究会', instagram: 'https://www.instagram.com/mctquiz/', twitter: 'https://twitter.com/MCT_Quiz' },
  { name: 'ロボコン', twitter: 'https://twitter.com/Matsue_Robocon' },
  {
    name: 'レスコン',
    twitter: 'https://twitter.com/MCTrescon',
    homepage: 'https://mctrescon.blogspot.com/2017/05/what-is-mct-mct-mct-matsue-college-of.html?m=1',
  },
  { name: 'デザコン', twitter: 'https://twitter.com/mct_dezakon' },
  { name: 'エコラン' },
];
