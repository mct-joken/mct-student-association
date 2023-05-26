import { Title } from '../components/title';
import { Club_card } from '../components/club_card';
import { Props } from '../components/club_card';

export const Club = () => (
  <center>
    <Title title={'部活動'} />
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
      {clubs.map((club) => (
        <Club_card
          name={club.name}
          twitter={club.twitter}
          instagram={club.instagram}
          homepage={club.homepage}
          facebook={club.facebook}
          key={club.name}
        />
      ))}
    </div>
  </center>
);

const clubs: Props[] = [
  { name: '陸上競技部', twitter: 'https://twitter.com/matsue_ct_TF' },
  { name: '柔道部', twitter: 'https://twitter.com/Mct_judo20' },
  { name: '剣道部' },
  { name: 'サッカー部', twitter: 'https://twitter.com/mct_football' },
  { name: '卓球部' },
  { name: 'アーチェリー部' },
  { name: '弓道部' },
  { name: '硬式野球部' },
  { name: 'テニス部' },
  { name: 'ラグビー部' },
  { name: 'バスケットボール部', twitter: 'https://twitter.com/Matsuekosen_BB' },
  { name: 'ソフトテニス部' },
  { name: 'ボート部', twitter: 'https://twitter.com/Matsuekosen_BB' },
  { name: '水泳部', twitter: 'https://twitter.com/matsue_ct_swim' },
  { name: 'ハンドボール部' },
  { name: 'バドミントン部' },
  { name: '男子バレーボール部' },
  { name: '女子バレーボール部' },
  { name: '写真部', twitter: 'https://twitter.com/mct_shashinbu' },
  { name: '理科部' },
  { name: '社会奉仕部' },
  { name: '情報科学研究部', twitter: 'https://twitter.com/mct_joken', homepage: 'https://joken.dev' },
  { name: '囲碁将棋部' },
  { name: '郷土研究部', twitter: 'https://twitter.com/kyoudoken' },
  { name: 'ロボコン部' },
  { name: 'エコラン' },
  { name: '吹奏楽部', twitter: 'https://twitter.com/mctbb_prm', facebook: 'https://www.facebook.com/mctwind/' },
  { name: '文芸部' },
  { name: '書道部' },
  { name: 'ESS部' },
  { name: '漫画研究同好会' },
  { name: '美術同好会' },
  { name: '数学同好会' },
  {
    name: 'レスコン',
    twitter: 'https://twitter.com/MCTrescon',
    homepage: 'https://mctrescon.blogspot.com/2017/05/what-is-mct-mct-mct-matsue-college-of.html?m=1',
  },
];
